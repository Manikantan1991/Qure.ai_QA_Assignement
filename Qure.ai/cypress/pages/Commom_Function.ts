
export class Main_Class {

  /**
    @param Itemtext 
    @param waittime 
   */
  select_Element(Itemtext: string, waittime: number) {
    // Get an an element when text is known not ID or name
    cy.contains(Itemtext).click();
    cy.wait(waittime);
  }

  Get_Element(Itemtext: string, waittime: number) {
    // get an element by ID or Name
    cy.get(Itemtext).click();
    cy.wait(waittime);
  }

  Set_Element_Value(Itemtext: string, Itemvalue: string) {
    // set value for an element
    cy.get(Itemtext).type(Itemvalue);
  }

  Get_Element_Index(Itemtext: string, Index: number) {
    // select the last element in the array
    cy.get(Itemtext).eq(Index).click({
      force: true
    });
  }

}