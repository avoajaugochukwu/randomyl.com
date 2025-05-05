import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Random Generator Tools',
  description: 'Learn more about our collection of random generator tools and the team behind them.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">About Random Generator Tools</h1>
          <p className="text-xl text-muted-foreground">
            Simplifying creativity and problem-solving with powerful random generation tools
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-lg">
            We built Random Generator Tools to provide developers, creators, and everyday users with 
            reliable, easy-to-use random generation utilities. Our goal is to streamline workflows and 
            inspire creativity through randomness.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8">What We Offer</h2>
          <p className="text-lg">
            Our platform offers a diverse collection of random generators, each designed with specific 
            use cases in mind. From phone numbers to QR codes, Bible verses to nouns, our tools help 
            you quickly generate the content you need.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-medium mb-2">For Developers</h3>
              <p>
                Generate test data, placeholder content, and sample information to use in your 
                applications. Save time on manual data creation and focus on building great software.
              </p>
            </div>
            
            <div className="border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-medium mb-2">For Content Creators</h3>
              <p>
                Find inspiration, create randomized content, and discover new ideas through random 
                generation. Break through creative blocks with unexpected combinations.
              </p>
            </div>
            
            <div className="border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-medium mb-2">For Educators</h3>
              <p>
                Create classroom activities, generate practice problems, and produce educational 
                content with our random generators. Engage students with varied examples.
              </p>
            </div>
            
            <div className="border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-medium mb-2">For Everyone</h3>
              <p>
                Solve everyday problems with our easy-to-use tools. Whether you need to make a 
                decision, create a password, or find a random Bible verse for inspiration.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-12">Our Technology</h2>
          <p className="text-lg">
            Built with modern web technologies like Next.js, TypeScript, and Tailwind CSS, our platform 
            delivers a fast, responsive experience across all devices. We leverage AI to power many of 
            our generators, ensuring high-quality, contextually relevant random content.
          </p>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-6">Ready to get started?</h2>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/tools">
                  Explore Our Tools
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 