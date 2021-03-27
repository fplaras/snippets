<template>
  <div>
    <nav class="sb-topnav navbar navbar-expand navbar-dark dark-primary-color">
      <a class="navbar-brand" href="index.html">Vue Dashboard</a>
      <button
        class="btn btn-link btn-sm order-1 order-lg-0"
        id="sidebarToggle"
        v-on:click="sidebarToggle"
        href="#"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Navbar Search-->
      <form
        class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0"
      >
        <!--  <div class="input-group">
                    <input class="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button"><i class="fas fa-search"></i></button>
                    </div>
                </div> -->
      </form>
      <!-- Navbar-->
      <ul class="navbar-nav ml-auto ml-md-0">
        <li class="nav-item dropdown">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <!-- https://github.com/bootstrap-vue/bootstrap-vue/issues/3614 -->
            <template slot="button-content">
              <i class="fas fa-user fa-fw"></i>
            </template>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
            <b-dropdown-item href="#">Activity Log</b-dropdown-item>
            <b-dropdown-item class="dropdown-divider"></b-dropdown-item>
            <b-dropdown-item href="#">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </li>
      </ul>
    </nav>
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <nav
          class="sb-sidenav accordion sb-sidenav-dark default-primary-color"
          id="sidenavAccordion"
        >
          <div class="sb-sidenav-menu">
            <div class="nav">
              <div class="sb-sidenav-menu-heading">Core</div>
              <a class="nav-link" href="index.html">
                <div class="sb-nav-link-icon">
                  <i class="fas fa-tachometer-alt"></i>
                </div>
                Dashboard
              </a>
              <div class="sb-sidenav-menu-heading">Interface</div>
              <b-nav-item v-b-toggle.collapsePages>Pages</b-nav-item>

              <b-collapse id="collapsePages" class="mt-2">
                <nav
                  class="sb-sidenav-menu-nested nav accordion"
                  id="sidenavAccordionPages"
                >
                  <!--  <a
                    class="nav-link collapsed"
                    href="#"
                    data-toggle="collapse"
                    data-target="#pagesCollapseAuth"
                    aria-expanded="false"
                    aria-controls="pagesCollapseAuth"
                  >
                    Authentication
                    <div class="sb-sidenav-collapse-arrow">
                      <i class="fas fa-angle-down"></i>
                    </div>
                  </a> -->
                  <b-nav-item v-b-toggle.pagesCollapseAuth>Authentication</b-nav-item>

                  <b-collapse id="pagesCollapseAuth" class="mt-2">
                    <nav class="sb-sidenav-menu-nested nav">
                      <router-link class="nav-link" to="/Login">Login</router-link>
                      <a class="nav-link" href="register.html">Register</a>
                      <a class="nav-link" href="password.html"
                        >Forgot Password</a
                      >
                    </nav>
                  </b-collapse>
                </nav>
              </b-collapse>
              <div
                class="collapse"
                id="collapsePages"
                aria-labelledby="headingTwo"
                data-parent="#sidenavAccordion"
              >
                <nav
                  class="sb-sidenav-menu-nested nav accordion"
                  id="sidenavAccordionPages"
                >
                  <a
                    class="nav-link collapsed"
                    href="#"
                    data-toggle="collapse"
                    data-target="#pagesCollapseAuth"
                    aria-expanded="false"
                    aria-controls="pagesCollapseAuth"
                  >
                    Authentication
                    <div class="sb-sidenav-collapse-arrow">
                      <i class="fas fa-angle-down"></i>
                    </div>
                  </a>
                  <div
                    class="collapse"
                    id="pagesCollapseAuth"
                    aria-labelledby="headingOne"
                    data-parent="#sidenavAccordionPages"
                  >
                    <nav class="sb-sidenav-menu-nested nav">
                      <router-link to="/Login">Login</router-link>
                      <a class="nav-link" href="register.html">Register</a>
                      <a class="nav-link" href="password.html"
                        >Forgot Password</a
                      >
                    </nav>
                  </div>
                  <a
                    class="nav-link collapsed"
                    href="#"
                    data-toggle="collapse"
                    data-target="#pagesCollapseError"
                    aria-expanded="false"
                    aria-controls="pagesCollapseError"
                  >
                    Error
                    <div class="sb-sidenav-collapse-arrow">
                      <i class="fas fa-angle-down"></i>
                    </div>
                  </a>
                  <div
                    class="collapse"
                    id="pagesCollapseError"
                    aria-labelledby="headingOne"
                    data-parent="#sidenavAccordionPages"
                  >
                    <nav class="sb-sidenav-menu-nested nav">
                      <a class="nav-link" href="401.html">401 Page</a>
                      <a class="nav-link" href="404.html">404 Page</a>
                      <a class="nav-link" href="500.html">500 Page</a>
                    </nav>
                  </div>
                </nav>
              </div>
              <div class="sb-sidenav-menu-heading">Addons</div>
              <a class="nav-link" href="charts.html">
                <div class="sb-nav-link-icon">
                  <i class="fas fa-chart-area"></i>
                </div>
                Charts
              </a>
              <a class="nav-link" href="tables.html">
                <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                Tables
              </a>
            </div>
          </div>
          <div class="sb-sidenav-footer dark-primary-color">
            <div class="small">Logged in as:</div>
            {User Logged In}
          </div>
        </nav>
      </div>
      <div id="layoutSidenav_content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    sidebarToggle() {
      if (
        document.querySelector("body").classList.contains("sb-sidenav-toggled")
      ) {
        document.querySelector("body").classList.remove("sb-sidenav-toggled");
      } else {
        document.querySelector("body").classList.add("sb-sidenav-toggled");
      }
    },
  },
  mounted() {},
};
</script>