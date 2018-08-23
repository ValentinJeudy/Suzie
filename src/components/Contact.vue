<template>
  <div class="container">
    <div class="content">
      <div class="form-block booking">
        <h2>Booking</h2>
        <form action="">
          <label for="mail">Mail :</label>
          <input name="mail" type="text">
          <label for="subject">Subject :</label>
          <input name="subject" type="text">
          <label for="message">Your message :</label>
          <textarea name="message" cols="30" rows="10"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div class="form-block management">
        <h2>Management</h2>
        <form class="" action="">
          <label for="mail">Mail :</label>
          <input name="mail" type="text">
          <label for="subject">Subject :</label>
          <input name="subject" type="text">
          <label for="message">Your message :</label>
          <textarea name="message" cols="30" rows="10"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  components: {
  },
  data () {
    return {
      title: 'Welcome to Your Contact Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/scss/Contact.scss" scoped lang="scss"></style>
