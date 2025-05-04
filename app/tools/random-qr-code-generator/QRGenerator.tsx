'use client';

import { useState } from 'react';
import { Download, RefreshCw } from 'lucide-react';

import { useGenerator } from '@/app/hooks/useGenerator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface GeneratorResponse {
  qrCode: string; // base64 encoded image
  content: string;
  error?: string;
}

interface QROptions {
  type: string;
  size: number;
  errorCorrection: 'L' | 'M' | 'Q' | 'H';
  foregroundColor: string;
  backgroundColor: string;
  content?: ContentValues;
}

interface ContentValues {
  // URL
  url?: string;
  
  // Text
  text?: string;
  
  // Contact
  contactName?: string;
  contactPhone?: string;
  contactEmail?: string;
  contactAddress?: string;
  
  // Email
  emailAddress?: string;
  emailSubject?: string;
  emailBody?: string;
  
  // Phone
  phoneNumber?: string;
  
  // WiFi
  wifiSsid?: string;
  wifiPassword?: string;
  wifiEncryption?: 'WPA' | 'WEP' | 'None';
  
  // Calendar
  calendarTitle?: string;
  calendarStart?: string;
  calendarEnd?: string;
  calendarLocation?: string;
  calendarDescription?: string;
}

const contentTypes = [
  { value: 'url', label: 'URL' },
  { value: 'text', label: 'Text' },
  { value: 'contact', label: 'Contact Info' },
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone Number' },
  { value: 'wifi', label: 'WiFi Credentials' },
  { value: 'calendar', label: 'Calendar Event' },
];

const errorCorrectionLevels = [
  { value: 'L', label: 'Low (7%)' },
  { value: 'M', label: 'Medium (15%)' },
  { value: 'Q', label: 'Quartile (25%)' },
  { value: 'H', label: 'High (30%)' },
];

const wifiEncryptionTypes = [
  { value: 'WPA', label: 'WPA/WPA2' },
  { value: 'WEP', label: 'WEP' },
  { value: 'None', label: 'None' },
];

export default function QRGenerator() {
  const [type, setType] = useState<string>('url');
  const [prompt, setPrompt] = useState('');
  const [contentValues, setContentValues] = useState<ContentValues>({
    url: 'https://',
    text: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    contactAddress: '',
    emailAddress: '',
    emailSubject: '',
    emailBody: '',
    phoneNumber: '',
    wifiSsid: '',
    wifiPassword: '',
    wifiEncryption: 'WPA',
    calendarTitle: '',
    calendarStart: '',
    calendarEnd: '',
    calendarLocation: '',
    calendarDescription: '',
  });
  
  const [options, setOptions] = useState<QROptions>({
    type: 'url',
    size: 300,
    errorCorrection: 'M',
    foregroundColor: '#000000',
    backgroundColor: '#FFFFFF',
    content: contentValues,
  });

  const [{ response, loading, error }, handleSubmit] = useGenerator<GeneratorResponse>(
    prompt,
    'qr',
    options
  );

  const handleOptionChange = (key: keyof QROptions, value: string | number) => {
    setOptions(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleContentChange = (key: keyof ContentValues, value: string) => {
    const newContentValues = {
      ...contentValues,
      [key]: value
    };
    
    setContentValues(newContentValues);
    setOptions(prev => ({
      ...prev,
      content: newContentValues
    }));
  };

  const handleDownload = (format: 'png' | 'svg' | 'jpeg') => {
    if (!response?.qrCode) return;
    
    const link = document.createElement('a');
    link.href = response.qrCode;
    link.download = `qr-code.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const validateForm = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation for required fields based on type
    let isValid = true;
    let errorMessage = '';
    
    switch(type) {
      case 'url':
        if (!contentValues.url) {
          isValid = false;
          errorMessage = 'URL is required';
        }
        break;
      case 'text':
        if (!contentValues.text) {
          isValid = false;
          errorMessage = 'Text is required';
        }
        break;
      case 'contact':
        if (!contentValues.contactName) {
          isValid = false;
          errorMessage = 'Contact name is required';
        }
        break;
      case 'email':
        if (!contentValues.emailAddress) {
          isValid = false;
          errorMessage = 'Email address is required';
        }
        break;
      case 'phone':
        if (!contentValues.phoneNumber) {
          isValid = false;
          errorMessage = 'Phone number is required';
        }
        break;
      case 'wifi':
        if (!contentValues.wifiSsid) {
          isValid = false;
          errorMessage = 'Network name (SSID) is required';
        }
        break;
      case 'calendar':
        if (!contentValues.calendarTitle || !contentValues.calendarStart) {
          isValid = false;
          errorMessage = 'Event title and start date are required';
        }
        break;
    }
    
    if (!isValid) {
      toast.error(errorMessage);
      return;
    }
    
    handleSubmit(e);
  };

  // Render content-specific input fields based on selected type
  const renderContentFields = () => {
    switch (type) {
      case 'url':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="url">URL</Label>
              <Input
                id="url"
                value={contentValues.url}
                onChange={(e) => handleContentChange('url', e.target.value)}
                placeholder="https://example.com"
              />
            </div>
          </div>
        );
        
      case 'text':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="text">Text</Label>
              <Textarea
                id="text"
                value={contentValues.text}
                onChange={(e) => handleContentChange('text', e.target.value)}
                placeholder="Enter your text here"
                rows={4}
              />
            </div>
          </div>
        );
        
      case 'contact':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="contactName">Name</Label>
              <Input
                id="contactName"
                value={contentValues.contactName}
                onChange={(e) => handleContentChange('contactName', e.target.value)}
                placeholder="John Doe"
              />
            </div>
            <div>
              <Label htmlFor="contactPhone">Phone</Label>
              <Input
                id="contactPhone"
                value={contentValues.contactPhone}
                onChange={(e) => handleContentChange('contactPhone', e.target.value)}
                placeholder="+1 (123) 456-7890"
              />
            </div>
            <div>
              <Label htmlFor="contactEmail">Email</Label>
              <Input
                id="contactEmail"
                value={contentValues.contactEmail}
                onChange={(e) => handleContentChange('contactEmail', e.target.value)}
                placeholder="email@example.com"
              />
            </div>
            <div>
              <Label htmlFor="contactAddress">Address</Label>
              <Textarea
                id="contactAddress"
                value={contentValues.contactAddress}
                onChange={(e) => handleContentChange('contactAddress', e.target.value)}
                placeholder="123 Main St, City, Country"
                rows={2}
              />
            </div>
          </div>
        );
        
      case 'email':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="emailAddress">Email Address</Label>
              <Input
                id="emailAddress"
                value={contentValues.emailAddress}
                onChange={(e) => handleContentChange('emailAddress', e.target.value)}
                placeholder="recipient@example.com"
              />
            </div>
            <div>
              <Label htmlFor="emailSubject">Subject (optional)</Label>
              <Input
                id="emailSubject"
                value={contentValues.emailSubject}
                onChange={(e) => handleContentChange('emailSubject', e.target.value)}
                placeholder="Meeting Request"
              />
            </div>
            <div>
              <Label htmlFor="emailBody">Body (optional)</Label>
              <Textarea
                id="emailBody"
                value={contentValues.emailBody}
                onChange={(e) => handleContentChange('emailBody', e.target.value)}
                placeholder="Hello, I'd like to schedule a meeting..."
                rows={3}
              />
            </div>
          </div>
        );
        
      case 'phone':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                value={contentValues.phoneNumber}
                onChange={(e) => handleContentChange('phoneNumber', e.target.value)}
                placeholder="+1 (123) 456-7890"
              />
            </div>
          </div>
        );
        
      case 'wifi':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="wifiSsid">Network Name (SSID)</Label>
              <Input
                id="wifiSsid"
                value={contentValues.wifiSsid}
                onChange={(e) => handleContentChange('wifiSsid', e.target.value)}
                placeholder="WiFi Network Name"
              />
            </div>
            <div>
              <Label htmlFor="wifiPassword">Password</Label>
              <Input
                id="wifiPassword"
                type="password"
                value={contentValues.wifiPassword}
                onChange={(e) => handleContentChange('wifiPassword', e.target.value)}
                placeholder="WiFi Password"
              />
            </div>
            <div>
              <Label htmlFor="wifiEncryption">Encryption Type</Label>
              <Select
                value={contentValues.wifiEncryption}
                onValueChange={(value) => handleContentChange('wifiEncryption', value)}
              >
                <SelectTrigger id="wifiEncryption" className="w-full">
                  <SelectValue placeholder="Select encryption type" />
                </SelectTrigger>
                <SelectContent>
                  {wifiEncryptionTypes.map(type => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );
        
      case 'calendar':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="calendarTitle">Event Title</Label>
              <Input
                id="calendarTitle"
                value={contentValues.calendarTitle}
                onChange={(e) => handleContentChange('calendarTitle', e.target.value)}
                placeholder="Team Meeting"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="calendarStart">Start Date & Time</Label>
                <Input
                  id="calendarStart"
                  type="datetime-local"
                  value={contentValues.calendarStart}
                  onChange={(e) => handleContentChange('calendarStart', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="calendarEnd">End Date & Time</Label>
                <Input
                  id="calendarEnd"
                  type="datetime-local"
                  value={contentValues.calendarEnd}
                  onChange={(e) => handleContentChange('calendarEnd', e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="calendarLocation">Location (optional)</Label>
              <Input
                id="calendarLocation"
                value={contentValues.calendarLocation}
                onChange={(e) => handleContentChange('calendarLocation', e.target.value)}
                placeholder="Conference Room A"
              />
            </div>
            <div>
              <Label htmlFor="calendarDescription">Description (optional)</Label>
              <Textarea
                id="calendarDescription"
                value={contentValues.calendarDescription}
                onChange={(e) => handleContentChange('calendarDescription', e.target.value)}
                placeholder="Monthly team sync to discuss project status"
                rows={2}
              />
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-xl mx-auto p-4 w-full">
      <form 
        onSubmit={validateForm}
        className="space-y-4"
      >
        <div>
          <p className="text-sm font-medium mb-1">Type of content</p>
          <Select
            value={type}
            onValueChange={(value: string) => {
              setType(value || 'url');
              handleOptionChange('type', value || 'url');
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select type of content" />
            </SelectTrigger>
            <SelectContent>
              {contentTypes.map(contentType => (
                <SelectItem key={contentType.value} value={contentType.value}>
                  {contentType.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Content-specific fields */}
        {renderContentFields()}
        
        <div className="border-t pt-4">
          <p className="text-sm font-medium mb-1">Content prompt (optional)</p>
          <Input
            value={prompt}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrompt(e.target.value)}
            placeholder="e.g., tech blog, restaurant menu, business card"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Add context or details about the content you want to generate
          </p>
        </div>

        <div className="border-t pt-4">
          <p className="text-sm font-medium mb-3">QR Code Options</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="qrSize">QR Code size (px)</Label>
              <Input
                id="qrSize"
                type="number"
                value={options.size}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  handleOptionChange('size', Number(e.target.value))}
                min={100}
                max={1000}
                step={50}
              />
            </div>

            <div>
              <Label htmlFor="errorCorrection">Error correction</Label>
              <Select
                value={options.errorCorrection}
                onValueChange={(value: string) => handleOptionChange('errorCorrection', value || 'M')}
              >
                <SelectTrigger id="errorCorrection" className="w-full">
                  <SelectValue placeholder="Select error correction" />
                </SelectTrigger>
                <SelectContent>
                  {errorCorrectionLevels.map(level => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="fgColor">Foreground color</Label>
              <Input
                id="fgColor"
                type="color"
                value={options.foregroundColor}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  handleOptionChange('foregroundColor', e.target.value)}
                className="h-10 cursor-pointer"
              />
            </div>

            <div>
              <Label htmlFor="bgColor">Background color</Label>
              <Input
                id="bgColor"
                type="color"
                value={options.backgroundColor}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  handleOptionChange('backgroundColor', e.target.value)}
                className="h-10 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            type="submit"
            disabled={loading}
            className="flex-1"
            size="lg"
          >
            {loading ? (
              'Generating...'
            ) : (
              <>
                <RefreshCw className="mr-2 h-4 w-4" /> Generate QR Code
              </>
            )}
          </Button>
        </div>
      </form>

      {loading && (
        <div className="flex justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}

      {error && (
        <div className="text-red-500 text-center p-4">
          {error}
        </div>
      )}

      {response?.qrCode && (
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">Generated QR Code:</p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDownload('png')}
              >
                <Download className="mr-2 h-4 w-4" /> PNG
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDownload('svg')}
              >
                <Download className="mr-2 h-4 w-4" /> SVG
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDownload('jpeg')}
              >
                <Download className="mr-2 h-4 w-4" /> JPEG
              </Button>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-md flex justify-center">
            <img src={response.qrCode} alt="Generated QR Code" />
          </div>
          <div className="mt-2">
            <p className="text-sm text-muted-foreground">Content: {response.content}</p>
          </div>
        </div>
      )}
    </div>
  );
} 