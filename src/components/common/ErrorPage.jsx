import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <main aria-labelledby="error-title" className="flex min-h-screen flex-col items-center justify-center bg-[#F5F2F0] px-6 py-16 text-center">
            <p className="text-8xl font-black leading-none tracking-tight text-brand-ink sm:text-9xl md:text-[14rem]">404</p>
            <h1 id="error-title" className="mt-6 text-2xl font-bold uppercase text-brand-ink sm:text-3xl">Page not found</h1>
            <p className="mt-3 max-w-md text-base leading-6 text-brand-ink/80">The page you are looking for may have moved or does not exist.</p>
            <Link to="/" className="mt-8 inline-flex items-center justify-center rounded-md bg-brand-peach px-8 py-4 text-sm font-semibold uppercase text-brand-ink transition-colors hover:bg-brand-peach-hover">Back to Home</Link>
        </main>
    )
}

export default ErrorPage
