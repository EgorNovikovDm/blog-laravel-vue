<template>
    <div class="'container mx-auto px-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 mt-20">
        <div v-if="$apollo.loading"><div class="loadingio-spinner-spinner-2weexdizmdn"><div class="ldio-1ie5z3jpasw">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
        </div>
        </div>
        <div v-else>
            <div class="text-lg text-gray-600">
                By <router-link :to="{name:'author', params:{id: post.author.id}}" class="underline">{{ post.author.name }}</router-link> in <router-link :to="{name:'topic', params:{slug: post.topic.slug}}" class="underline hover:text-black">{{ post.topic.name }}</router-link> &nbsp; {{ post.created_at | timeago}}
            </div>
            <h1 class="text-5xl mt-10 font-bold mb-12">{{ post.title }}</h1>

            <p class="text-gray-700 pb-3 mb-12 whitespace-pre-line">{{ post.content }}</p>

            <div class="mb-24 flex">
                <div class="mr-6">
                    <img :src="'/storage/faces/' + post.author.avatar" alt="Author avatar" class="w-16 h-16 rounded-full">
                </div>
                <div class="flex flex-col justify-center">
                    <div class="text-xl text-gray-600">Written by <router-link :to="{name:'author', params:{id: post.author.id}}" class="underline">{{ post.author.name }}</router-link></div>
                    <div class="text-gray-600">Published in <router-link :to="{name:'topic', params:{slug: post.topic.slug}}" class="underline hover:text-black">{{ post.topic.name }}</router-link> &nbsp; on {{ post.created_at | longDate }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
    name: "Post",
    apollo: {
        post: {
            query: gql`query ($id: ID!) {
                post(id: $id) {
                    id
                    title
                    lead
                    content
                    created_at
                    author {
                       id
                       name
                       avatar
                    }
                    topic {
                        id
                        name
                        slug
                    }
                }
            }`,
            variables() {
                return {
                    id: this.$route.params.id
                }
            },
            error() {
                this.$router.push({ name: "404" });
            }
        }
    }
}
</script>

<style scoped>
@keyframes ldio-1ie5z3jpasw {
    0% { opacity: 1 }
    100% { opacity: 0 }
}
.ldio-1ie5z3jpasw div {
    left: 94px;
    top: 48px;
    position: absolute;
    animation: ldio-1ie5z3jpasw linear 1s infinite;
    background: #fe718d;
    width: 12px;
    height: 24px;
    border-radius: 6px / 12px;
    transform-origin: 6px 52px;
}.ldio-1ie5z3jpasw div:nth-child(1) {
     transform: rotate(0deg);
     animation-delay: -0.9166666666666666s;
     background: #fe718d;
 }.ldio-1ie5z3jpasw div:nth-child(2) {
      transform: rotate(30deg);
      animation-delay: -0.8333333333333334s;
      background: #fe718d;
  }.ldio-1ie5z3jpasw div:nth-child(3) {
       transform: rotate(60deg);
       animation-delay: -0.75s;
       background: #fe718d;
   }.ldio-1ie5z3jpasw div:nth-child(4) {
        transform: rotate(90deg);
        animation-delay: -0.6666666666666666s;
        background: #fe718d;
    }.ldio-1ie5z3jpasw div:nth-child(5) {
         transform: rotate(120deg);
         animation-delay: -0.5833333333333334s;
         background: #fe718d;
     }.ldio-1ie5z3jpasw div:nth-child(6) {
          transform: rotate(150deg);
          animation-delay: -0.5s;
          background: #fe718d;
      }.ldio-1ie5z3jpasw div:nth-child(7) {
           transform: rotate(180deg);
           animation-delay: -0.4166666666666667s;
           background: #fe718d;
       }.ldio-1ie5z3jpasw div:nth-child(8) {
            transform: rotate(210deg);
            animation-delay: -0.3333333333333333s;
            background: #fe718d;
        }.ldio-1ie5z3jpasw div:nth-child(9) {
             transform: rotate(240deg);
             animation-delay: -0.25s;
             background: #fe718d;
         }.ldio-1ie5z3jpasw div:nth-child(10) {
              transform: rotate(270deg);
              animation-delay: -0.16666666666666666s;
              background: #fe718d;
          }.ldio-1ie5z3jpasw div:nth-child(11) {
               transform: rotate(300deg);
               animation-delay: -0.08333333333333333s;
               background: #fe718d;
           }.ldio-1ie5z3jpasw div:nth-child(12) {
                transform: rotate(330deg);
                animation-delay: 0s;
                background: #fe718d;
            }
.loadingio-spinner-spinner-2weexdizmdn {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: #ffffff;
}
.ldio-1ie5z3jpasw {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
}
.ldio-1ie5z3jpasw div { box-sizing: content-box; }
</style>

