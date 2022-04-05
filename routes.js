import router from "./router"
router.get("/about-me", function(req) {
  console.log(req.path)
})

router.init()
