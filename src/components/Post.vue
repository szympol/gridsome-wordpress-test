<template>
  <div>
    <h2 v-html="post.title" />
    <img
      :src="post.featuredMedia.mediaDetails.sizes.medium.sourceUrl"
      :width="post.featuredMedia.mediaDetails.sizes.medium.width"
      :alt="post.featuredMedia.altText"
    />
    <div v-html="post.excerpt" />
    <g-link :to="post.path">Przeczytaj więcej</g-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
