<template>
  <div class="contact">
    <div class="container top">
      <div class="row">
        <div class="col s12">
          <div class="img-wrap">
            <img src="earth.png" />
          </div>
          <h3 class="glow">Contact</h3>
          <h6 class="sub">
            Thanks for visiting world of information
            <br />send me a message or check out
            <br />my other projects.
          </h6>
          <i class="fas fa-arrow-down"></i>
        </div>
      </div>
    </div>

    <div class="container bottom">
      <div class="row">
        <div class="col form s12 m6 l6">
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">person</i>
                  <input id="name" type="text" class="validate" />
                  <label for="name">Name</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">mail</i>
                  <input id="email" type="email" class="validate" />
                  <label for="email">email</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">edit</i>
                  <textarea id="message" class="materialize-textarea"></textarea>
                  <label for="message">Message</label>
                </div>
              </div>
             
            </form>
          </div>
        </div>
        <div class="col s12 m6 l6">
          <h5>Other Projects</h5>
          <div class="projects">
            <div class="row project">
              <h6>
                The Vault:
                <a class="link" target="_blank" href="https://the-vault.ml">https://the-vault.ml</a>
              </h6>
            </div>
            <div class="row project">
              <h6>
                Angels & Demons:
                <a class="link" target="_blank" href="#">https://angels-and-demons.ml</a>
              </h6>
            </div>

            <div class="row project">
              <h6>
                Fusion Ninja App:
                <a class="link" target="_blank" href="#">https://play.google.com</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
  destroyed() {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.contact {
  min-height: 92vh;
  text-align: center;
  padding-top: 20px;
}
.top {
  padding: 100px 0;
}
.sub {
  color: rgb(194, 194, 194);
}
.projects {
  padding-left: 50px;
}
.project {
  padding: 30px 0;
  text-align: left;
}
.prefix {
  color: #fff;
  padding-right: 10px;
}
.form {
  color: white;
  padding: 50px;
  box-sizing: border-box;
}
.input-field label {
  color: #fff;
}
/* label focus color */
.input-field input[type="text"]:focus + label,
.input-field input[type="email"]:focus + label,
.input-field textarea:focus + label {
  color: #fff;
}
.input-field input[type="text"],
.input-field input[type="email"],
.input-field textarea {
  color: #fff;
}
/* label underline focus color */
.input-field input[type="text"]:focus,
.input-field input[type="email"]:focus,
.input-field textarea:focus {
  border-bottom: 1px solid #fff;
  box-shadow: 0 1px 0 0 #fff;
}

/* icon prefix focus color */
.input-field .prefix.active {
  color: #fff;
}

.col {
  text-align: center;
  font-weight: 300;
  letter-spacing: 2px;
}
.img-wrap {
  width: 100px;
  margin: auto;
}
.img-wrap img {
  width: 100%;
}
h3 {
  padding: 30px 0;
}
h5 {
  text-align: center;
}
h6 {
  font-weight: 700;
  color: white;
}
.fas {
  font-size: 25px;
  padding-top: 20px;
}
.link {
  letter-spacing: 1px;
  padding-left: 10px;
  font-size: 12px;
  color: rgb(211, 211, 211);
}
.link:hover {
  color: white;
  text-shadow: 0 0 20px #fff;
}
@media (max-width: 1024px) {
  .project {
    padding: 10px 0;
    text-align: center;
  }
  .form {
    padding: 20px;
  }
  .projects {
    padding: 20px 0 10px 0;
  }
  .link {
    display: block;
    padding: 15px 0 0 0;
  }
  @media (max-width: 600px) {
    .contact {
      padding-bottom: 30px;
      height: auto;
    }
    .top {
      padding: 30px 0;
    }
    br {
      display: none;
    }
    .form {
      padding: 5px;
      box-sizing: content-box;
    }
  }
}
</style>
