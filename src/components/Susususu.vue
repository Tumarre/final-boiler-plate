<template>
  <div id="app">
    <h2 contenteditable @input="updateContent($event, 'heading')">
      {{ contentHeadingTemp }}
    </h2>
    <p contenteditable @input="updateContent($event, 'paragraph')">
      {{ contentMessageTemp }}
    </p>
  </div>
</template>

<script>
const headingText = "Hello from nightprogrammer.com!";
const contentText =
  "Feel free to click on the title above or this paragraph, to make changes!";

export default {
  data() {
    return {
      contentHeading: headingText,
      contentHeadingTemp: headingText,
      contentMessage: contentText,
      contentMessageTemp: contentText,
    };
  },
  methods: {
    updateContent(e, contentType) {
      const inputText = e.target.innerText;
      switch (contentType) {
        case "heading":
          this.contentHeading = inputText;
          break;
        case "paragraph":
          this.contentMessage = inputText;
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
}
</style>
