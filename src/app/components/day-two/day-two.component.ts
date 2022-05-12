import { Component } from '@angular/core';

@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrls: ['./day-two.component.scss']
})
export class DayTwoComponent {

  persons: { lastName: string, firstName: string, group: number | null, reichstagskuppel: boolean }[] = [
    { lastName: 'Dannenberg', firstName: 'Matthias', group: 1, reichstagskuppel: true },
    { lastName: 'Homey', firstName: 'Tobias', group: 1, reichstagskuppel: true },
    { lastName: 'Ari', firstName: 'Ahmettug', group: 1, reichstagskuppel: true },
    { lastName: 'Hamm', firstName: 'Moritz', group: 1, reichstagskuppel: true },
    { lastName: 'Voß', firstName: 'Hendrik Sebastian', group: 1, reichstagskuppel: true },
    { lastName: 'Petrich', firstName: 'Robin', group: 1, reichstagskuppel: true },

    { lastName: 'Falch', firstName: 'Stephan', group: 2, reichstagskuppel: true },
    { lastName: 'Schwarz', firstName: 'Catharina', group: 2, reichstagskuppel: true },
    { lastName: 'Peschke', firstName: 'Lydia', group: 2, reichstagskuppel: true },
    { lastName: 'Frahm', firstName: 'Jörg', group: 2, reichstagskuppel: true },
    { lastName: 'Gartmann', firstName: 'Dirk', group: 2, reichstagskuppel: true },
    { lastName: 'Domany', firstName: 'Jan', group: 2, reichstagskuppel: true },

    { lastName: 'Bongartz', firstName: 'Fabian', group: 3, reichstagskuppel: true },
    { lastName: 'Rosenau', firstName: 'Yvonne', group: 3, reichstagskuppel: true },
    { lastName: 'Thompson', firstName: 'Alexandra', group: 3, reichstagskuppel: true },
    { lastName: 'Nowack', firstName: 'Stefan Artur', group: 3, reichstagskuppel: true },
    { lastName: 'Droste', firstName: 'Niels', group: 3, reichstagskuppel: true },

    { lastName: 'Böhmer', firstName: 'Oliver', group: 4, reichstagskuppel: true },
    { lastName: 'Eberhardt', firstName: 'Alexander', group: 4, reichstagskuppel: true },
    { lastName: 'Dereobali', firstName: 'Hasan Yigit', group: 4, reichstagskuppel: true },
    { lastName: 'Peters', firstName: 'Andreas', group: 4, reichstagskuppel: true },
    { lastName: 'Petrov', firstName: 'Alexsandar', group: 4, reichstagskuppel: true },
    { lastName: 'Frömel', firstName: 'Hans', group: 4, reichstagskuppel: true },

    { lastName: 'Schwartz', firstName: 'Philipp', group: 5, reichstagskuppel: true },
    { lastName: 'Hillebrand', firstName: 'Lukas', group: 5, reichstagskuppel: true },
    { lastName: 'Heine-Puppe', firstName: 'Annett', group: 5, reichstagskuppel: true },
    { lastName: 'Köhler', firstName: 'Sabine', group: 5, reichstagskuppel: true },
    { lastName: 'Kuhn', firstName: 'Volker', group: 5, reichstagskuppel: true },
    { lastName: 'Backes', firstName: 'Uwe', group: 5, reichstagskuppel: true },

    { lastName: 'Domnik', firstName: 'Ralf', group: 6, reichstagskuppel: true },
    { lastName: 'Kunath', firstName: 'Niels', group: 6, reichstagskuppel: true },
    { lastName: 'Kämper', firstName: 'Sebastian', group: 6, reichstagskuppel: true },
    { lastName: 'Göwe', firstName: 'Steffen', group: 6, reichstagskuppel: true },
    { lastName: 'Wedekind', firstName: 'Frank', group: 6, reichstagskuppel: true },
    { lastName: 'Jede', firstName: 'Katrin', group: 6, reichstagskuppel: true },

    { lastName: 'Schumacher', firstName: 'Andreas', group: 7, reichstagskuppel: true },
    { lastName: 'Weise', firstName: 'Eric', group: 7, reichstagskuppel: true },
    { lastName: 'Meck', firstName: 'Lena', group: 7, reichstagskuppel: true },
    { lastName: 'Harms', firstName: 'Jörg', group: 7, reichstagskuppel: true },
    { lastName: 'Weigand', firstName: 'Christine', group: 7, reichstagskuppel: true },
    { lastName: 'Brückner', firstName: 'Alexandra', group: 7, reichstagskuppel: true },

    { lastName: 'Sabbane', firstName: 'Faycal', group: 8, reichstagskuppel: true },
    { lastName: 'Theißen', firstName: 'Volker', group: 8, reichstagskuppel: true },
    { lastName: 'Deuß', firstName: 'Sandra', group: 8, reichstagskuppel: false },
    { lastName: 'Morales', firstName: 'Bianca', group: 8, reichstagskuppel: true },
    { lastName: 'Wega', firstName: 'Björn-Eric', group: 8, reichstagskuppel: true },
    { lastName: 'Breun', firstName: 'Gregor', group: 8, reichstagskuppel: true },

    { lastName: 'Zumbach', firstName: 'Volker', group: 9, reichstagskuppel: true },
    { lastName: 'Juklevski', firstName: 'Oleg', group: 9, reichstagskuppel: true },
    { lastName: 'Schwarz', firstName: 'Daniela', group: 9, reichstagskuppel: true },
    { lastName: 'Ribeiro', firstName: 'Guilherme', group: 9, reichstagskuppel: true },
    { lastName: 'Lehrmann', firstName: 'Martin', group: 9, reichstagskuppel: true },
    { lastName: 'Scheffels', firstName: 'Ralf', group: 9, reichstagskuppel: true },

    { lastName: 'Liebig', firstName: 'Lutz', group: 10, reichstagskuppel: true },
    { lastName: 'Markwald', firstName: 'Paul', group: 10, reichstagskuppel: true },
    { lastName: 'Wiese', firstName: 'Jessica', group: 10, reichstagskuppel: true },
    { lastName: 'Schwesinger', firstName: 'Uwe', group: 10, reichstagskuppel: true },
    { lastName: 'Greb', firstName: 'Thomas', group: 10, reichstagskuppel: true },
    { lastName: 'Brendel', firstName: 'Thomas', group: 10, reichstagskuppel: true },

    { lastName: 'Grün', firstName: 'Christian', group: null, reichstagskuppel: true },
    { lastName: 'Schrumpf', firstName: 'Matthias', group: null, reichstagskuppel: true },


  ].sort((p1, p2) => p1.lastName.localeCompare(p2.lastName))


  constructor() {
  }

  calcPlaceholder(): 'Placeholder' | 'TimeIsUp' {
    if (new Date() > new Date(2022, 4, 19, 13, 30)) {
      return 'TimeIsUp'
    } else {
      return 'Placeholder'
    }
  }

  getReichtagsPersons(): { lastName: string, firstName: string, group: number | null, reichstagskuppel: boolean }[] {
    return this.persons.filter(person => person.reichstagskuppel)
  }

  getWorldCafePersons(): { lastName: string, firstName: string, group: number | null, reichstagskuppel: boolean }[] {
    return this.persons.filter(person => person.group != null)
  }

}
