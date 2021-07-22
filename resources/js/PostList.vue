<template>
    <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 my-20">
        <h2 class="text-4xl ">All Posts</h2>
        <div v-if="$apollo.loading"><div class="loadingio-spinner-spinner-2weexdizmdn"><div class="ldio-1ie5z3jpasw">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
        </div>
        </div>
        <div v-else>
            <PostListitem v-for="post in posts" :key="post.id" :post="post" class="mt-10" />
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag';
import PostListitem from "./components/PostListitem";
export default {
    components: {
        PostListitem,
    },
    apollo: {
        posts: gql`
        {
            posts {
            id,
            title,
            lead
            }
        }
        `
    }
};
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
