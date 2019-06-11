<template>
  <div class="main_top_content">
    <navigation></navigation>
    <div class="image_overlay_ecommerce">
      <div class="container">
        <div class="col-sm-6">
          <img src="../assets/images/ecommerce01.png" alt>
        </div>
        <div class="col-sm-4 col-sm-offset-2 title_header">
          <h1>
           Ecommerce Website Development 
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
    <div class="bg_2">
      <div class="container">
        <div class="col-sm-4 content_ecommerce">
            <!-- <h4>Build For </h4> -->
            <ul>
              <li>Build For</li>
              <li class="line_border"></li>
            </ul>
            <span class="line_border"></span>
        </div>
        <div class="col-sm-4"></div>
        <div class="col-sm-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import navigation from "../components/navigation";
export default {
  components: {
    navigation
  }
};
</script>