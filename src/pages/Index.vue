<template>
  <Layout>
    <h1>Blog WP + Gridsome = Wow</h1>
    <ul class="post-list">
      <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <Post :post="node" />
      </li>
    </ul>
    <Pager :info="$page.allWordPressPost.pageInfo" />
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (page: $page, perPage: 10) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        excerpt
        featuredMedia {
          altText
          mediaDetails {
            sizes {
               medium {
                width
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
import Post from "~/components/Post.vue";

export default {
  components: {
    Pager,
    Post,
  },
  metaInfo: {
    title: "Blog WP + Gridsome",
  },
};
</script>
