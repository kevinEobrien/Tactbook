<template>
  <div class="postcard">
        <div id="each-card" class="card mb-3">
            <div class="card-top">
                <div>
                    <img id="thumbnail" v-bind:src="post.profileUrl" alt="thumbnail">
                </div>
                <h3 class="card-header">{{post.name}}</h3>
            </div>
            <div class="card-body">
                <h5 class="card-title">{{post.content}}</h5>
            </div>
            <div class="post-pics">
                <img class="post-pic" v-bind:src="post.imageUrl1" alt="">
                <img class="post-pic"  v-bind:src="post.imageUrl2" alt="">
                <!-- ../../static/before.jpg -->
            </div>
                <div class="card-body">
                    <label for="heart">{{post.likes}}</label>
                    <img @click="loveIt()" id="heart" src="../../static/heart.png" alt="heart">
                    <a href="#" class="card-link"></a>
                    <button type="button" @click="reportAbuse()" class="btn btn-outline-danger">Report Abuse</button>
                </div>
            <div id="comments" class="card-footer text-muted">
                <!-- <div class="thumbnail-container">
                <img id="thumbnail" src="../../static/kjirsti.jpg" alt="commenter-thumbnail">
                </div>
                <p class="comment">I thought I would never see your face again!</p> -->
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["getPosts", "post"],
  data() {
    return {
      thumbnailImage: post.profileUrl,
      apiURL: "https://tactbook-api.herokuapp.com/post",
      comment: ""
    };
  },
  methods: {
    reportAbuse() {
      console.log("report abuse function runs");
    },
    loveIt() {
      console.log(this.apiURL + this.post.id);
      //     fetch(this.apiURL + post +this.post.id, {
      //       method: "put",
      //       headers: new Headers({ "Content-Type": "application/json" }),
      //       body: JSON.stringify(this.submission)
      //     })
      //       .then(() => console.log("updated!!! "))
      //       .then(() => this.getPosts());
      // }
    },
    getComments() {
      fetch("https://tactbook-api.herokuapp.com/comment")
        .then(response => response.json())
        .then(response => {
          this.comments = response.post.body;
          console.log(this.post);
        });
    }
  }
};
</script>

<style scoped>
.postcard {
  width: 80vw;
  max-width: 80vw;
  margin: 0;
}
#each-card {
  max-width: 80vw;
  width: 80vw;
  height: fit-content;
  margin: 0;
  padding: 0;
}
.post-pics {
  display: flex;
  flex-flow: row;
  width: 80vw;
}
.post-pic {
  max-width: 33vw;
  max-height: 10rem;
  width: auto;
  height: auto;
  margin: 0.5rem;
}
.card-top {
  display: flex;
  flex-flow: row;
}
.thumbnail-container {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin: 0 2rem 0 0;
  background: url("../../static/kjirsti.jpg") center center;
  background-size: cover;
  margin: 2rem 0rem 1rem 0rem;
}
#thumbnail {
  max-width: 2rem;
  min-width: 2rem;
  min-height: 2rem;
  max-height: 2rem;
  width: 2rem center center;

  display: block;
  border-radius: 50%;
  margin: 2rem 1rem 2rem 1rem;
  overflow: hidden;
  text-align: center;
}
#comments {
  display: flex;
  flex-flow: row;
}
.comment {
  margin: 2rem 1rem 1rem 1rem;
}
#heart {
  height: 2rem;
}
@media screen and (max-width: 350px) {
  #thumbnail {
    display: none;
  }
  .thumbnail-container {
    display: none;
  }
}
@media screen and (min-width: 1000px) {
  #each-card {
    width: 45vw;
    margin: 0.5rem;
  }
  .postcard {
    width: 45vw;
  }
}
</style>


