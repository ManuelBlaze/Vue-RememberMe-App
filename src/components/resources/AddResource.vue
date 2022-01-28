<template>
  <base-card>
    <form>
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" v-model="title" />
      </div>

      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          v-model="description"
        />
      </div>

      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" v-model="link" />
      </div>

      <div>
        <base-button type="submit" @click.prevent="submit">
          <em class="fas fa-plus" /> Add
        </base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
/**
 * Minimun input character
 * @constant
 * @type {Number}
 */
const MIN_CHAR = 5;

export default {
  data() {
    return {
      title: '',
      description: '',
      link: '',
      modalTitle: 'One or more fields are incorrect',
      modalMsg: '',
    };
  },
  methods: {
    setModalMsg(input) {
      this.modalMsg = `The ${input} must have at least ${MIN_CHAR} characters..., `;
    },
    validateForm() {
      // clean the inputs
      const cleanTitle = this.title.trim();
      const cleanDescription = this.description.trim();
      const cleanLink = this.link.trim();

      if (cleanTitle.length < MIN_CHAR) {
        this.setModalMsg('Title');
        return false;
      }

      if (cleanDescription.length < MIN_CHAR) {
        this.setModalMsg('Description');
        return false;
      }

      if (cleanLink.length < MIN_CHAR) {
        this.setModalMsg('Link');
        return false;
      }
    },
    submit() {
      // validate the form
      const isValid = this.validateForm();

      if (!isValid) {
        return;
      }
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
