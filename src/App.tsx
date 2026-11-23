import { Button, buttonVariants } from './components/ui/button'

const palette = [
  { name: 'Shockingly green', value: '#0ae448', color: 'bg-shockingly-green' },
  { name: 'Light green', value: '#abff84', color: 'bg-light-green' },
  { name: 'Orange', value: '#ff8709', color: 'bg-orangey' },
  { name: 'Pink', value: '#fec5fb', color: 'bg-pink' },
  { name: 'Lilac', value: '#9d95ff', color: 'bg-lilac' },
  { name: 'Blue', value: '#00bae2', color: 'bg-blue' },
]

const variantNames = ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'] as const

function App() {
  return (
    <main className="min-h-screen bg-page text-primary">
      <header className="border-b border-subtle bg-page">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between gap-navigation-group px-24 py-navigation-block">
          <a href="#top" className="inline-flex items-center gap-8 font-dm-sans text-documentation-section font-semibold tracking-heading-sm text-primary no-underline">
            <span className="grid size-control-40 place-items-center rounded-icon-button border border-brand text-brand" aria-hidden="true">N</span>
            Nice UI Library
          </a>
          <a href="#components" className="hidden rounded-pill px-16 py-10 font-dm-sans text-documentation-note font-regular text-link-muted underline-offset-4 transition-colors hover:text-link-hover hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-action-focus-ring sm:inline-flex">
            Component library <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section id="top" className="mx-auto grid max-w-6xl gap-32 px-24 py-section md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-16 inline-flex items-center gap-8 rounded-pill border border-subtle bg-panel px-12 py-8 font-dm-sans text-documentation-note font-semibold text-secondary">
            <span className="size-8 rounded-pill bg-brand" aria-hidden="true" /> TEST.1 · DESIGN SYSTEM
          </p>
          <h1 className="max-w-2xl font-dm-sans text-documentation-title font-semibold tracking-heading-sm text-primary">
            Built to stand out.
          </h1>
          <p className="mt-16 max-w-xl font-dm-sans text-documentation-note font-regular text-secondary">
            A dark, expressive interface system shaped by vivid green accents, warm cream typography, and a precise set of reusable tokens.
          </p>
          <div className="mt-24 flex flex-wrap gap-8">
            <a href="#components" className={buttonVariants()}>Explore components <span aria-hidden="true">↓</span></a>
            <a href="#tokens" className={buttonVariants({ variant: 'outline' })}>View design tokens</a>
          </div>
        </div>

        <div className="rounded-card border border-subtle bg-panel p-card">
          <div className="flex items-start justify-between gap-16">
            <div>
              <p className="font-dm-sans text-documentation-note font-regular text-secondary">Design system</p>
              <h2 className="mt-8 font-dm-sans text-documentation-section font-semibold tracking-heading-sm text-primary">TEST.1 — DesignBridge</h2>
            </div>
            <span className="rounded-pill border border-subtle px-12 py-8 font-dm-sans text-button-xs font-semibold text-brand">ALPHA</span>
          </div>
          <div className="mt-24 rounded-card border border-subtle bg-page p-card">
            <div className="flex items-center justify-between gap-16">
              <span className="font-dm-sans text-documentation-note font-regular text-secondary">Core accent</span>
              <span className="font-dm-sans text-documentation-note font-semibold text-primary">#0AE448</span>
            </div>
            <div className="mt-16 flex h-control-40 overflow-hidden rounded-pill" aria-label="Brand gradient from shockingly green to light green">
              <span className="flex-1 bg-gradient-to-r from-gradient-brand-start to-gradient-brand-end" />
            </div>
            <div className="mt-16 flex items-center justify-between gap-16">
              <span className="font-dm-sans text-documentation-note font-regular text-secondary">Dark foundation</span>
              <span className="rounded-pill border border-subtle bg-off-black px-12 py-8 font-dm-sans text-button-xs font-semibold text-primary">#0E100F</span>
            </div>
          </div>
        </div>
      </section>

      <section id="components" className="border-y border-subtle bg-section">
        <div className="mx-auto max-w-6xl px-24 py-section">
          <div className="max-w-2xl">
            <p className="font-dm-sans text-documentation-note font-semibold uppercase tracking-navigation text-brand">Components</p>
            <h2 className="mt-12 font-dm-sans text-documentation-title font-semibold tracking-heading-sm text-primary">Button system</h2>
            <p className="mt-12 font-dm-sans text-documentation-note font-regular text-secondary">
              Six variants, eight sizes, and clear interaction states. The primary action uses the brand gradient as a stroke.
            </p>
          </div>

          <div className="mt-32 grid gap-card-grid lg:grid-cols-2">
            <article className="rounded-card border border-subtle bg-panel p-card">
              <h3 className="font-dm-sans text-documentation-section font-semibold tracking-heading-sm text-primary">Variants</h3>
              <p className="mt-8 font-dm-sans text-documentation-note font-regular text-secondary">Default, outline, secondary, ghost, destructive, and link.</p>
              <div className="mt-24 flex flex-wrap items-center gap-8">
                {variantNames.map((variant) => (
                  <Button key={variant} variant={variant}>{variant}</Button>
                ))}
              </div>
            </article>

            <article className="rounded-card border border-subtle bg-panel p-card">
              <h3 className="font-dm-sans text-documentation-section font-semibold tracking-heading-sm text-primary">Sizes and states</h3>
              <p className="mt-8 font-dm-sans text-documentation-note font-regular text-secondary">Compact controls through large calls to action.</p>
              <div className="mt-24 flex flex-wrap items-center gap-8">
                <Button size="xs">Extra small</Button>
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon" aria-label="Add item">+</Button>
                <Button size="icon-xs" aria-label="Add small item">+</Button>
                <Button size="icon-sm" aria-label="Add medium item">+</Button>
                <Button size="icon-lg" aria-label="Add large item">+</Button>
                <Button disabled>Disabled</Button>
                <Button aria-busy="true" disabled>Loading</Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="tokens" className="mx-auto max-w-6xl px-24 py-section">
        <div className="max-w-2xl">
          <p className="font-dm-sans text-documentation-note font-semibold uppercase tracking-navigation text-brand">Foundations</p>
          <h2 className="mt-12 font-dm-sans text-documentation-title font-semibold tracking-heading-sm text-primary">Design tokens</h2>
          <p className="mt-12 font-dm-sans text-documentation-note font-regular text-secondary">
            Tailwind utilities map to the palette, type scale, spacing, and radii defined in DESIGN.md.
          </p>
        </div>

        <div className="mt-32 grid gap-card-grid md:grid-cols-2">
          <article className="rounded-card border border-subtle bg-panel p-card">
            <div className="flex items-center justify-between gap-16">
              <h3 className="font-dm-sans text-documentation-section font-semibold tracking-heading-sm text-primary">Accent palette</h3>
              <span className="font-dm-sans text-documentation-note font-regular text-secondary">6 colors</span>
            </div>
            <div className="mt-24 grid grid-cols-2 gap-element sm:grid-cols-3">
              {palette.map((color) => (
                <div key={color.name} className="flex items-center gap-8">
                  <span className={`size-control-32 shrink-0 rounded-small-tag ${color.color}`} aria-hidden="true" />
                  <span>
                    <span className="block font-dm-sans text-documentation-note font-semibold text-primary">{color.name}</span>
                    <span className="mt-4 block font-dm-sans text-button-xs font-regular text-secondary">{color.value}</span>
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-card border border-subtle bg-panel p-card">
            <h3 className="font-dm-sans text-documentation-section font-semibold tracking-heading-sm text-primary">Type and surfaces</h3>
            <div className="mt-24 space-y-16">
              <div className="rounded-card border border-subtle bg-page p-16">
                <p className="font-dm-sans text-documentation-title font-semibold tracking-heading-sm text-primary">Display</p>
                <p className="mt-8 font-dm-sans text-documentation-note font-regular text-secondary">DM Sans · 44px · SemiBold</p>
              </div>
              <div className="grid gap-element sm:grid-cols-2">
                <div className="rounded-card border border-subtle bg-callout p-16">
                  <p className="font-dm-sans text-documentation-note font-semibold text-on-callout">Callout surface</p>
                  <p className="mt-8 font-dm-sans text-button-xs font-regular text-on-callout">Cream background</p>
                </div>
                <div className="rounded-card border border-subtle bg-brand-wash p-16">
                  <p className="font-dm-sans text-documentation-note font-semibold text-on-callout">Brand wash</p>
                  <p className="mt-8 font-dm-sans text-button-xs font-regular text-on-callout">Core green background</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <footer className="border-t border-subtle bg-footer">
        <div className="mx-auto flex max-w-6xl flex-col gap-element px-24 py-footer-block-min font-dm-sans text-documentation-note font-regular text-secondary sm:flex-row sm:items-center sm:justify-between">
          <span>Nice UI Library · TEST.1 — DesignBridge</span>
          <a href="#top" className="text-link underline-offset-4 transition-colors hover:text-link-hover hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-action-focus-ring">Back to top ↑</a>
        </div>
      </footer>
    </main>
  )
}

export default App
