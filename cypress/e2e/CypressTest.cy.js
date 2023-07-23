describe("Comar Test", () => {
  it("should perform the specified tasks", () => {
    // Step 1: Navigate to the URL
    cy.visit("https://www.comar.tn/");

    // Step 2: Click on the "Actualités" section
    cy.contains("Actualités").click();

    // Step 3: Verify if the page is opened by checking the existence of the "ACTUALITÉS" text
    cy.contains("Actualités").should("be.visible");

    // Step 4: Enter "COMAR Assurances partenaire" into the search form and submit the search
    cy.get("input[name='searchMeta']").type("COMAR Assurances partenaire").type("{enter}");

    // Step 5: Verify the appearance of the text "COMAR Assurances partenaire du Semi-Marathon Ulysse Djerba"
    cy.contains("COMAR Assurances partenaire du Semi-Marathon Ulysse Djerba").should("be.visible");
  });
});
