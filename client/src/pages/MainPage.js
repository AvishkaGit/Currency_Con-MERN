import React from 'react'

export default function MainPage() {
  return (
    <div>
        <h1 className=' lg:mx-32 text-5xl font-bold text-green-500'>Convert Your Currencies GUYs</h1>

        <p className=' lg:mx-32 opacity-40 py-6'>"Convert Your Currencies GUYs" suggests that you should exchange or change your money from one currency to another today. This could mean converting dollars to euros, yen to dollars, or any other currency pair. Doing so might help you take advantage of favorable exchange rates or meet specific financial needs.</p>

        <div className='mt-5 flex items-center justify-center flex-col'>
            <section className=' w-full lg:w-1/2'>
                <form>
                    
                        <div className="mb-6">
                           <label htmlFor="email" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Date</label>
                           <input type="Date" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="name@flowbite.com" required />
                        </div>

                        <div className="mb-6">
                             <label htmlFor="email" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Source Currency</label>
                             <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" name='' id=''>

                                <option value="" >Select the Source Currency</option>

                             </select>
                        </div>

                        <div className="mb-6">
                             <label htmlFor="email" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Target Currency</label>
                             <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" name='' id=''>

                                <option value="" >Select the target Currency</option>

                             </select>
                        </div>

                        <div className="mb-6">
                           <label htmlFor="email" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Amount in source currency</label>
                           <input type="text" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Amount in source currency" required />
                        </div>

                        <button className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md'>Get the target Currency</button>
                    
                </form>
            </section>
        </div>

    </div>
  )
}
