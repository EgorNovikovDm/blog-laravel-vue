require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import PostList from "./PostList";
import Post from "./Post";
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';
import TopicPostList from './TopicPostList';
import AuthorPostList from "./AuthorPostList";
import NotFound from "./NotFound";


window.Vue = require('vue').default;
Vue.use(VueRouter);
Vue.use(VueApollo);


const routes = [
    {
        path: '/',
        name: 'index',
        component: PostList
    },
    {
        path: '/post/:id',
        name: 'post',
        component: Post
    },
    {
        path: '/topic/:slug',
        name: 'topic',
        component: TopicPostList
    },
    {
        path: '/author/:id',
        name: 'author',
        component: AuthorPostList,
    },
    {
        path: '*',
        name: '404',
        component: NotFound
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    uri: 'http://127.0.0.1:8000/graphql'
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

import moment from 'moment';

Vue.filter('timeago', value => moment(value).fromNow());
Vue.filter('longDate', value => moment(value).format("MMMM Do YYYY"));

const app = new Vue({
    router,
    el: '#app',
    apolloProvider
});
