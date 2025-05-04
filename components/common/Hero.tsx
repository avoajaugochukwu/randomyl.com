interface HeroProps {
  title: string;
  description: string;
} 

export default function Hero({ title, description }: HeroProps) {
  return (
    <section className="text-center mb-20 md:mb-24 lg:mb-28">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="bg-gradient-to-r from-primary via-pink-500 to-secondary bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8">
            {description}
          </p>
        </div>
      </section>
  )
}