package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

type Page struct {
	Title string
	Body  []byte
}

func main() {
	http.HandleFunc("/", viewHandler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func viewHandler(w http.ResponseWriter, r *http.Request) {
	title := r.URL.Path[len("/"):]

	if title == "" {
		title = "index"
	}

	p, _ := loadPage(title)

	fmt.Fprintf(w, "<h1>%s</h1><div>%s</div>", p.Title, p.Body)
}

func loadPage(title string) (*Page, error) {
	filename := "pages/" + title + ".txt"

	body, err := os.ReadFile(filename)

	if err != nil {
		return nil, err
	}

	return &Page{Title: title, Body: body}, nil
}
