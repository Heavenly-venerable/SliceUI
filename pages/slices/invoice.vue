<template>
  <main class="min-h-screen md:flex md:justify-center md:items-center">
    <div class="p-6 mx-w-md md:border-4 md:border-black md:rounded-3xl">
      <header class="flex items-center">
        <nav>
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </nav>
        <h1 class="w-full text-2xl text-center font-bold">New Invoice</h1>
      </header>
      <div class="flex justify-center items-center">
        <h2 class="text-lg text-component font-medium">#253</h2>
      </div>
      <div class="py-4 grid grid-cols-2 gap-2">
        <div class="p-2 bg-gray-200 rounded-md">
          <h3 class="font-medium">Invoice Date</h3>
          <p class="text-sm">01-04-2025</p>
        </div>
        <div class="p-2 bg-gray-200 rounded-md">
          <h3 class="font-medium">Due Date</h3>
          <p class="text-sm">09-04-2025</p>
        </div>
        <div class="p-2 col-span-2 bg-gray-200 rounded-md">
          <h3 class="font-medium">Client</h3>
          <p class="text-sm">ABC Company</p>
        </div>
        <div class="col-span-2 bg-gray-200 rounded-md">
          <div class="overflow-x-auto rounded-md">
            <table class="w-full text-left table-auto">
              <thead>
                <tr class="bg-gray-200">
                  <th class="px-4 py-2 whitespace-nowrap">Item</th>
                  <th class="px-4 py-2 whitespace-nowrap">Price</th>
                  <th class="px-4 py-2 whitespace-nowrap">Quantity</th>
                  <th class="px-4 py-2 whitespace-nowrap">Total</th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr>
                  <td class="px-4 py-2 whitespace-nowrap">Apple</td>
                  <td class="px-4 py-2 whitespace-nowrap">$1.00</td>
                  <td class="px-4 py-2 whitespace-nowrap">3</td>
                  <td class="px-4 py-2 whitespace-nowrap">$3.00</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 whitespace-nowrap">Banana</td>
                  <td class="px-4 py-2 whitespace-nowrap">$0.50</td>
                  <td class="px-4 py-2 whitespace-nowrap">6</td>
                  <td class="px-4 py-2 whitespace-nowrap">$3.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="p-2 col-span-2 bg-gray-200 rounded-md">
          <div class="flex justify-between items-center">
            <h4 class="text-sm font-medium">Taxes (5%)</h4>
            <p class="text-sm">$0.30</p>
          </div>
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-semibold">Total Amount</h3>
            <p class="text-xl font-black">$6.30</p>
          </div>
        </div>
      </div>
      <div class="py-4 flex flex-col gap-2">
        <button class="flex justify-center items-center gap-2 w-full px-4 py-2 bg-black text-white rounded-md">
          Send Invoice Now
          <svg class="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
            viewBox="0 0 512 512">
            <!-- Icon from IonIcons by Ben Sperry - https://github.com/ionic-team/ionicons/blob/main/LICENSE -->
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
              d="m53.12 199.94l400-151.39a8 8 0 0 1 10.33 10.33l-151.39 400a8 8 0 0 1-15-.34l-67.4-166.09a16 16 0 0 0-10.11-10.11L53.46 215a8 8 0 0 1-.34-15.06M460 52L227 285" />
          </svg>
        </button>
        <button class="flex justify-center items-center gap-2 w-full px-4 py-2 bg-white border border-black rounded-md">
          Schedule Delivery
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <!-- Icon from Akar Icons by Arturo Wibawa - https://github.com/artcoholic/akar-icons/blob/master/LICENSE -->
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path
                d="M9 20H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4v3M8 2v2m7-2v2M2 8h19m-2.5 7.643l-1.5 1.5" />
              <circle cx="17" cy="17" r="5" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  </main>
</template>
