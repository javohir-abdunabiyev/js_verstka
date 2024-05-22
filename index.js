const body = document.querySelector('body');
const divs = document.createElement('div');
const block_one = document.createElement('div');
const block_two = document.createElement('div');
const block_three = document.createElement('div');
const block_four = document.createElement('div');
const first_h1 = document.createElement('h1')
const second_h1 = document.createElement('h1')
const third_h1 = document.createElement('h1')
const fourth_h1 = document.createElement('h1')
const one_p = document.createElement('p')
const two_p = document.createElement('p')
const three_p = document.createElement('p')
const four_p = document.createElement('p')
const btns = document.createElement('div')
const btns_one = document.createElement('button')
const btns_two = document.createElement('button')
const btns_three = document.createElement('button')
const btns_four = document.createElement('button')

btns_one.classList.add('btns_style')
btns_two.classList.add('btns_style')
btns_three.classList.add('btns_style')
btns_four.classList.add('btns_style')

btns_one.innerText = '#react'
btns_two.innerText = '#react'
btns_three.innerText = '#react'
btns_four.innerText = '#react'


one_p.innerText = 'Accept Payments in your Software-as-a-Service Product with Stripe'
two_p.innerText = 'Master the fundamentals of Next.js 14 and the App Router'
three_p.innerText ='Learn how to build awesome full-stack apps with SvelteKit'
four_p.innerText = 'Build and deploy a full-stack, production-ready web app with Supabase, React, and Postgres.'

one_p.classList.add('style_p')
two_p.classList.add('style_p')
three_p.classList.add('style_p')
four_p.classList.add('style_p')


first_h1.innerText = 'STRIPE FOR SAAS'
second_h1.innerText = 'NEXT.JS FULL COURSE'
third_h1.innerText = 'SVELTEKIT FULL COURSE'
fourth_h1.innerText ='REACT SUPABASE FULL COURSE'

first_h1.classList.add('h1_styles')
second_h1.classList.add('h1_styles')
third_h1.classList.add('h1_styles')
fourth_h1.classList.add('h1_styles')


const img_one = document.createElement('img')
img_one.src = 'igms/stripe.webp'
const img_two = document.createElement('img')
img_two.src = 'igms/next.webp'
const img_three = document.createElement('img')
img_three.src = 'igms/fullcours.webp'
const img_four = document.createElement('img')
img_four.src = 'igms/featured.webp'


divs.classList.add('divs_style');
block_one.classList.add('block_one');
block_two.classList.add('block_two');
block_three.classList.add('block_three');
block_four.classList.add('block_four');
img_one.className = 'imgs'
img_two.className = 'imgs'
img_three.className = 'imgs'
img_four.className = 'imgs'


divs.appendChild(block_one);
divs.appendChild(block_two);
divs.appendChild(block_three);
divs.appendChild(block_four);
block_one.appendChild(img_one)
block_two.appendChild(img_two)
block_three.appendChild(img_three)
block_four.appendChild(img_four)
block_one.appendChild(first_h1)
block_two.appendChild(second_h1)
block_three.appendChild(third_h1)
block_four.appendChild(fourth_h1)
block_one.appendChild(one_p)
block_two.appendChild(two_p)
block_three.appendChild(three_p)
block_four.appendChild(four_p)
block_one.appendChild(btns_one)
block_two.appendChild(btns_two)
block_three.appendChild(btns_three)
block_four.appendChild(btns_four)


body.appendChild(divs);