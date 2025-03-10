document.addEventListener("DOMContentLoaded", () => {
    // Sidebar toggle functionality
    const toggleSidebarBtn = document.getElementById("toggle-sidebar")
    const sidebar = document.getElementById("sidebar")
    const mainWrapper = document.getElementById("main-wrapper")
    const mobileSidebarToggle = document.getElementById("mobile-sidebar-toggle")
    const sidebarOverlay = document.getElementById("sidebar-overlay")
  
    function toggleSidebar() {
      sidebar.classList.toggle("collapsed")
      mainWrapper.classList.toggle("expanded")
    }
  
    function toggleMobileSidebar() {
      sidebar.classList.toggle("mobile-visible")
      sidebarOverlay.classList.toggle("active")
    }
  
    toggleSidebarBtn.addEventListener("click", toggleSidebar)
    mobileSidebarToggle.addEventListener("click", toggleMobileSidebar)
    sidebarOverlay.addEventListener("click", toggleMobileSidebar)
  
    // Submenu toggle functionality
    const menuHeaders = document.querySelectorAll(".menu-header")
  
    menuHeaders.forEach((header) => {
      header.addEventListener("click", function () {
        this.classList.toggle("active")
        const submenu = this.nextElementSibling
        submenu.classList.toggle("active")
      })
    })
  
    // Search functionality
    const searchInput = document.getElementById("search-input")
    const examCards = document.querySelectorAll(".exam-card")
    const filterTags = document.querySelectorAll(".filter-tag")
  
    function filterExams() {
      const searchTerm = searchInput.value.toLowerCase()
      const activeFilters = Array.from(document.querySelectorAll(".filter-tag.active")).map((filter) =>
        filter.getAttribute("data-filter"),
      )
  
      examCards.forEach((card) => {
        const title = card.querySelector(".exam-title").textContent.toLowerCase()
        const tags = Array.from(card.querySelectorAll(".tag")).map((tag) => tag.textContent.toLowerCase())
  
        const matchesSearch = title.includes(searchTerm) || tags.some((tag) => tag.includes(searchTerm))
        const matchesFilters =
          activeFilters.length === 0 || activeFilters.some((filter) => tags.some((tag) => tag.includes(filter)))
  
        card.style.display = matchesSearch && matchesFilters ? "" : "none"
      })
    }
  
    searchInput.addEventListener("input", filterExams)
  
    filterTags.forEach((tag) => {
      tag.addEventListener("click", function () {
        this.classList.toggle("active")
        filterExams()
      })
    })
  
    // Horizontal scroll controls for exam rows
    const rowControls = document.querySelectorAll(".row-controls")
  
    rowControls.forEach((control) => {
      const prevBtn = control.querySelector(".prev-btn")
      const nextBtn = control.querySelector(".next-btn")
      const examRow = control.closest(".category-section").querySelector(".exam-row")
  
      prevBtn.addEventListener("click", () => {
        examRow.scrollBy({ left: -300, behavior: "smooth" })
      })
  
      nextBtn.addEventListener("click", () => {
        examRow.scrollBy({ left: 300, behavior: "smooth" })
      })
    })
  })
  
  