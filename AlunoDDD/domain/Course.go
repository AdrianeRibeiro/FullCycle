package domain

import (
	"fmt"
)

type Course struct {
	Id      string
	Name    string
	TutorId string
}

type Video struct {
	Id        string
	Course    Course
	URL       string
	Reference Reference
}

type Reference struct {
	author   string
	bookName string
	page     int
}

func (r Reference) toString() string {
	return fmt.Sprintf("%s, page: %d, by %s", r.bookName, r.page, r.author)
}
