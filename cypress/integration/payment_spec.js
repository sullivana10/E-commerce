describe("payment", () => {
  it("user can make payment", () => {
    // add item to cart
    cy.visit("localhost:3000");
    cy.get("button", { name: "Add to Cart" }).eq(0).click();
    // go to cart
    cy.findByRole("button", { name: /show cart items/i }).click();
    // remove from cart
    cy.findByRole("button", { name: /remove/i }).click();
    // go to products
    cy.findByRole("link", { name: /start adding some/i }).click();
    // add different item to cart
    cy.get("button", { name: "Add to Cart" }).eq(1).click();
    // go to cart
    cy.findByRole("button", { name: /show cart items/i }).click();
    // adjust quantity
    cy.findByRole("button", { name: /\+/i }).click();
    // click checkout
    cy.findByRole("button", { name: /checkout/i }).click();
    // fill out shipping form
    cy.wait(5000);
    cy.get("input[name=firstName]").type("first");
    cy.get("input[name=lastName]").type("last");
    cy.get("input[name=address1]").type("123 abc");
    cy.get("input[name=email]").type("abc123@gmail.com");
    cy.get("input[name=city]").type("city");
    cy.get("input[name=zip]").type("12345");
    // click next
    cy.findByRole("button", { name: /next/i }).click();
    // enter card info
    cy.wait(1000);
    cy.getWithinIframe("input[name=cardnumber]").type("4242424242424242");
    cy.getWithinIframe("input[name=exp-date]").type("1232");
    cy.getWithinIframe("input[name=cvc]").type("987");
    cy.getWithinIframe('[name="postal"]').type("12345");
    //click pay
    cy.findByRole("button", { name: /pay/i }).click();
    // click back to home
    cy.wait(8000);
    cy.findByRole("button", { name: /back to home/i }).click();
  });
});
