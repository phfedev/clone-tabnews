test("Get to /api/v1/status should return 200", () => {
  fetch("http://localhost:3333/api/v1/status").then((response) => {
    expect(response.status).toBe(200)
  })
})