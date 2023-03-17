import Head from 'next/head';


export default function () {

    const companyName = 'Smile Chain'
    return <>
        <Head>
            <title>{companyName}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Coming Soon - {companyName}</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.4/tailwind.min.css" />
        </Head>
        <header class="py-10">
            <div class="container mx-auto flex justify-center items-center flex-col">
                <h1 class="text-6xl text-gray-900 font-bold mb-2">{companyName}</h1>
                <p class="text-lg text-gray-800 mb-10">We're launching soon! Stay tuned for updates.</p>
                <div class="flex py-6">
                    <input type="text" class="px-4 py-2 border border-gray-400 rounded-l w-full" placeholder="Enter your email address" />
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">Subscribe</button>
                </div>
                <p class="text-sm text-gray-600">Don't worry, we hate spam too!</p>
            </div>
        </header>
        <footer class="bg-gray-800 text-gray-100 py-10">
            <div class="container mx-auto flex justify-between items-center flex-wrap">
                <p class="mb-2">&copy; {(new Date().getFullYear())} {companyName}. All rights reserved.</p>
                <div class="flex items-center">
                    <a href="#" class="mx-3 hover:text-gray-400"><i class="fab fa-twitter" /></a>
                    <a href="#" class="mx-3 hover:text-gray-400"><i class="fab fa-facebook" /></a>
                    <a href="#" class="mx-3 hover:text-gray-400"><i class="fab fa-instagram" /></a>
                </div>
            </div>
        </footer>
    </>
}