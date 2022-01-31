<template>
  <base-modal v-if="isVisibleModal" :title="modalTitle" @close="handleModal">
    <template #default>
      <p>{{ modalMsg }}</p>
    </template>
  </base-modal>

  <base-card>
    <form>
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="title" />
      </div>

      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          ref="description"
        />
      </div>

      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="link" />
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
const MIN_CHAR = 3;

export default {
  inject: ['addResource'],
  data() {
    return {
      modalTitle: 'One or more fields are incorrect!',
      modalMsg: '',
      isVisibleModal: false,
    };
  },
  methods: {
    handleModal() {
      this.isVisibleModal = !this.isVisibleModal;
    },
    setModalMsg(input) {
      this.modalMsg = `The ${input} must have at least ${MIN_CHAR} characters... `;
    },
    validateForm() {
      // clean the inputs
      const cleanTitle = this.$refs.title.value.trim();
      const cleanDescription = this.$refs.description.value.trim();
      const cleanLink = this.$refs.link.value.trim();

      const response = {
        state: false,
        data: {},
      };

      if (cleanTitle.length < MIN_CHAR) {
        this.setModalMsg('Title');
        return response;
      }

      if (cleanDescription.length < MIN_CHAR) {
        this.setModalMsg('Description');
        return response;
      }

      if (cleanLink.length < MIN_CHAR) {
        this.setModalMsg('Link');
        return response;
      }

      return {
        state: true,
        data: {
          id: new Date().toISOString(),
          title: cleanTitle,
          description: cleanDescription,
          link: cleanLink,
        },
      };
    },
    submit() {
      // validate the form
      const { state, data } = this.validateForm();

      // if form has error show the modal
      if (!state) {
        this.handleModal();
        return;
      }

      // else inject the data
      this.addResource(data);
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
  border-color: #439b74;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
