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
	http.HandleFunc("/", Handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func Handler(w http.ResponseWriter, r *http.Request) {
	title := r.URL.Path[len("/"):]

	if title == "" {
		title = "index"
	}

	filename := "pages/" + title + ".txt"
	body, err := os.ReadFile(filename)

	if err != nil {
		fmt.Fprintf(w, "<h1>500 Internal Server Error</h1><div>%s</div>", err)
	}

	p := &Page{Title: title, Body: body}

	fmt.Fprintf(w, "<h1>%s</h1><div>%s</div>", p.Title, p.Body)
}
