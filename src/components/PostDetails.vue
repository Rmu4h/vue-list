<template>
  <div class="PostDetails">
    <h2>Post {{ postId }} details:</h2>

    <section class="PostDetails__post">
      <p>Lorem ipsum dolor sit amet.</p>
    </section>

    <section class="PostDetails__comments">
      <button type="button" class="button">Hide 2 comments</button>

      <ul class="PostDetails__list">
        <li class="PostDetails__list-item">
          <button
            type="button"
            class="PostDetails__remove-button button"
          >
            X
          </button>
          <p>My first comment</p>
        </li>

        <li class="PostDetails__list-item">
          <button
            type="button"
            class="PostDetails__remove-button button"
          >
            X
          </button>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </li>
      </ul>
    </section>

    <section>
      <div class="PostDetails__form-wrapper">
        <new-comment-form></new-comment-form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PostDetails',
  props: {
    postId: Number,
  }
}
</script>

<style scoped lang="scss">
  .PostDetails {
    &__post {
      padding: 10px 0 15px;
    }

    &__comments {
      text-align: right;
    }

    &__list {
      list-style: none;
    }

    &__list-item {
      margin: 5px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      border-radius: 10px;
      font-style: italic;
      font-weight: 300;
      font-size: 0.9rem;
      background: linear-gradient(
        to right, rgba(255, 255,255,1) 0%,
        rgba(246,246,246,1) 47%,
        rgba(250, 250, 253, 1) 100%,
      );
    }

    &__remove-button {
      min-width: 20px;
      color: inherit;
      background-color: transparent;
      transition: color 0.12s;
      margin-right: 10px;

      &:hover {
        color: #e9e6f2;
        background-color: transparent;
      }

      &:hover + p {
        transition: color 0.12s;
        color: #e9e6f2;
      }
    }

    &__form-wrapper {
      /* background-image: url(data); */
      border-radius: 10px;
    }
  }
</style>
