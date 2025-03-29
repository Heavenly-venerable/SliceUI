<script setup lang="ts">
const events = [
  {
    title: "Painting with us",
    image: "https://images.unsplash.com/photo-1510832842230-87253f48d74f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
    month: "DEC",
    date: 12,
    day: "TUE",
    time: { hour: "2:00", period: "PM", timezone: "GMT" },
    location: {
      name: "Sam's Cafe",
      street: "40 Charcot Rd",
      city: "London",
      postalCode: "NW1 8LS",
      country: "United Kingdom",
    },
  },
  {
    title: "Yoga in the Park",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D",
    month: "JAN",
    date: 15,
    day: "MON",
    time: { hour: "7:30", period: "AM", timezone: "GMT" },
    location: {
      name: "Hyde Park",
      street: "Serpentine Rd",
      city: "London",
      postalCode: "W2 2UH",
      country: "United Kingdom",
    },
  },
  {
    title: "Tech Meetup 2025",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    month: "FEB",
    date: 8,
    day: "THU",
    time: { hour: "6:00", period: "PM", timezone: "GMT" },
    location: {
      name: "Tech Hub London",
      street: "123 Innovation St",
      city: "London",
      postalCode: "EC1V 9NR",
      country: "United Kingdom",
    },
  },
  {
    title: "Live Jazz Night",
    image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    month: "MAR",
    date: 20,
    day: "WED",
    time: { hour: "8:00", period: "PM", timezone: "GMT" },
    location: {
      name: "Blue Note Bar",
      street: "50 Soho Square",
      city: "London",
      postalCode: "W1D 4QD",
      country: "United Kingdom",
    },
  },
  {
    title: "Food Tasting Festival",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    month: "APR",
    date: 10,
    day: "SAT",
    time: { hour: "1:00", period: "PM", timezone: "GMT" },
    location: {
      name: "Borough Market",
      street: "8 Southwark St",
      city: "London",
      postalCode: "SE1 1TL",
      country: "United Kingdom",
    },
  },
];
</script>

<template>
  <div
    class="min-h-screen py-12 px-4 md:px-10 grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
    <figure v-for="event in events" :key="event.title" class="w-full overflow-hidden rounded-2xl relative shadow-lg">
      <div class="relative h-64 md:h-full">
        <img class="w-full h-full object-cover" :src="event.image" alt="event" />
        <div class="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-100/30 to-transparent"></div>
      </div>
      <div class="absolute bottom-0 left-0 p-5 md:w-full">
        <h2 class="text-white text-xl font-semibold">{{ event.title }}</h2>
        <div class="py-2 flex space-x-4 items-start md:justify-between md:w-full">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-16 bg-white flex flex-col items-center rounded-lg overflow-hidden shadow-md">
              <span class="w-full text-white text-xs text-center bg-teal-500 py-1 font-bold">{{ event.month }}</span>
              <span class="w-full text-xs text-center font-semibold bg-white">{{ event.date }}</span>
              <span class="w-full text-xs text-gray-700 text-center bg-white">{{ event.day }}</span>
            </div>
            <div class="text-white text-sm">
              <p class="font-medium">{{ event.location.name }}</p>
              <p class="text-gray-300 text-xs">
                {{ event.location.street }}, {{ event.location.city }}
                <span class="block">{{ event.location.postalCode }}, {{ event.location.country }}</span>
              </p>
            </div>
          </div>
          <div class="self-end mb-1 text-right md:mb-2">
            <p class="text-xs text-white font-semibold">{{ event.time.hour }} {{ event.time.period }}</p>
            <p class="text-xs text-white">{{ event.time.timezone }}</p>
          </div>
        </div>
      </div>
    </figure>
  </div>
</template>
