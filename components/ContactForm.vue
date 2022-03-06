<template>
  <section
    class="container-fluid flex flex-wrap items-center justify-between flex-col"
  >
    <div class="mb-3 xl:w-96">
      <div v-if="success" class="flex items-center flex-col">
        <div class="text-green-600 i-carbon-checkmark-filled text-8xl" />
        <h2 class="font-medium leading-tight text-4xl mt-0 mb-4" text-center>
          Thanks for getting in touch. We will contact you soon.
        </h2>
      </div>
      <FormKit
        v-else
        v-slot="{ state: { loading } }"
        v-model="formData"
        type="form"
        submit-label="Send Message"
        :errors="errors"
        message-class="text-red-600 text-lg"
        :submit-attrs="{
          inputClass:
            'my-2 mb-2 w-full inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out',
        }"
        @submit="submit"
      >
        <div v-if="loading" text-center mb-4>
          <Spinner />
        </div>
        <template v-else>
          <FormKit class="d-none" style="display: none" name="_gotcha" />
          <FormKit
            label-class="form-label inline-block mb-2 text-xl"
            input-class="form-control
        block
        w-full
        px-4
        py-2
        text-xl
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        my-2
        focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
            name="name"
            label="Name"
            placeholder="Name"
            validation="required"
            validation-behavior="live"
          />

          <FormKit
            label-class="form-label inline-block mb-2 text-xl"
            input-class="form-control
        block
        w-full
        px-4
        py-2
        text-xl
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        my-2
        focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
            name="_replyto"
            label="Email Address"
            placeholder="Email Address"
            validation="required|email"
            validation-behavior="live"
          />

          <FormKit
            label-class="form-label inline-block mb-2 text-xl"
            input-class="form-control
        block
        w-full
        px-4
        py-2
        text-xl
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        my-2
        focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
            name="_subject"
            label="Subject"
            placeholder="Subject"
            validation="required"
            validation-behavior="live"
          />

          <FormKit
            label-class="form-label inline-block mb-2 text-xl"
            input-class="form-control
        block
        w-full
        px-4
        py-2
        text-xl
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        my-2
        focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
            name="message"
            label="Message"
            placeholder="Message"
            validation="required"
            validation-behavior="live"
            type="textarea"
          />
        </template>
      </FormKit>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const formData = ref({})
    const errors = ref([])
    return {
      formData,
      errors,
    }
  },
  data() {
    return {
      success: false,
    }
  },
  methods: {
    async submit(data) {
      const errorMessage =
        'There was a problem submitting your form, please try again.'
      try {
        const response = await fetch('https://formspree.io/f/meqnglwg', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
        if (response.ok) {
          this.success = true
        } else {
          response.json().then((data) => {
            if (Object.hasOwn(data, 'errors'))
              this.errors = data.errors.map((error) => error.message)
            else this.errors = [errorMessage]
          })
        }
      } catch (error) {
        this.errors = [errorMessage]
      }
    },
  },
}
</script>
