export const registro = {
    template : `<form class="mx-5">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Name">
    </div>
    <div class="form-group pt-4">
    <label for="phone">Phone Number</label>
    <input type="number" class="form-control" id="phnoneNumber" placeholder="Phone number">
  </div>
    <div class="form-group pt-4">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group pt-4">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <div class="pt-3 text-center">
        <button type="submit" class="btn btn-primary">Register</button>
    </div>
    </form>`
}
