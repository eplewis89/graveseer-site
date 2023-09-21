package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

var (
	app *gin.Engine
)

func routes(r *gin.RouterGroup) {
	r.GET("/index", func(c *gin.Context) {
		c.String(http.StatusOK, "Index Page")
	})
}

func init() {
	app = gin.New()

	r := app.Group("/api")

	routes(r)
}

func Hanler(w http.ResponseWriter, r *http.Request) {
	app.ServeHTTP(w, r)
}
