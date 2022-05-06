import { Component } from '@angular/core';

@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrls: ['./day-two.component.scss']
})
export class DayTwoComponent {

  persons: { lastName: string, firstName: string, group: number }[] = [
    { lastName: 'Dannenberg', firstName: 'Matthias', group: 1 },
    { lastName: 'Homey', firstName: 'Tobias', group: 1 },
    { lastName: 'Ari', firstName: 'Ahmettug', group: 1 },
    { lastName: 'Hamm', firstName: 'Moritz', group: 1 },
    { lastName: 'Voß', firstName: 'Hendrik Sebastian', group: 1 },
    { lastName: 'Petrich', firstName: 'Robin', group: 1 },

    { lastName: 'Falch', firstName: 'Stephan', group: 2 },
    { lastName: 'Schwarz', firstName: 'Catharina', group: 2 },
    { lastName: 'Peschke', firstName: 'Lydia', group: 2 },
    { lastName: 'Frahm', firstName: 'Jörg', group: 2 },
    { lastName: 'Gartmann', firstName: 'Dirk', group: 2 },
    { lastName: 'Domany', firstName: 'Jan', group: 2 },

    { lastName: 'Bongartz', firstName: 'Fabian', group: 3 },
    { lastName: 'Rosenau', firstName: 'Yvonne', group: 3 },
    { lastName: 'Thompson', firstName: 'Alexandra', group: 3 },
    { lastName: 'Nowack', firstName: 'Stefan Artur', group: 3 },
    { lastName: 'Radev', firstName: 'Roman', group: 3 },
    { lastName: 'Droste', firstName: 'Niels', group: 3 },

    { lastName: 'Böhmer', firstName: 'Oliver', group: 4 },
    { lastName: 'Eberhardt', firstName: 'Alexander', group: 4 },
    { lastName: 'Dereobali', firstName: 'Hasan Yigit', group: 4 },
    { lastName: 'Peters', firstName: 'Andreas', group: 4 },
    { lastName: 'Petrov', firstName: 'Alexsandar', group: 4 },
    { lastName: 'Frömel', firstName: 'Hans', group: 4 },

    { lastName: 'Schwartz', firstName: 'Philipp', group: 5 },
    { lastName: 'Hillebrand', firstName: 'Lukas', group: 5 },
    { lastName: 'Heine-Puppe', firstName: 'Annett', group: 5 },
    { lastName: 'Köhler', firstName: 'Sabine', group: 5 },
    { lastName: 'Kuhn', firstName: 'Volker', group: 5 },
    { lastName: 'Backes', firstName: 'Uwe', group: 5 },

    { lastName: 'Domnik', firstName: 'Ralf', group: 6 },
    { lastName: 'Kunath', firstName: 'Niels', group: 6 },
    { lastName: 'Kämper', firstName: 'Sebastian', group: 6 },
    { lastName: 'Göwe', firstName: 'Steffen', group: 6 },
    { lastName: 'Wedekind', firstName: 'Frank', group: 6 },
    { lastName: 'Jede', firstName: 'Katrin', group: 6 },
    { lastName: 'Silberkuhl', firstName: 'Alexander', group: 6 },

    { lastName: 'Schumacher', firstName: 'Andreas', group: 7 },
    { lastName: 'Weise', firstName: 'Eric', group: 7 },
    { lastName: 'Meck', firstName: 'Lena', group: 7 },
    { lastName: 'Harms', firstName: 'Jörg', group: 7 },
    { lastName: 'Weigand', firstName: 'Christine', group: 7 },
    { lastName: 'Brückner', firstName: 'Alexandra', group: 7 },

    { lastName: 'Sabbane', firstName: 'Faycal', group: 8 },
    { lastName: 'Theißen', firstName: 'Volker', group: 8 },
    { lastName: 'Deuß', firstName: 'Sandra', group: 8 },
    { lastName: 'Morales', firstName: 'Bianca', group: 8 },
    { lastName: 'Wega', firstName: 'Björn-Eric', group: 8 },
    { lastName: 'Breun', firstName: 'Gregor', group: 8 },

    { lastName: 'Zumbach', firstName: 'Volker', group: 9 },
    { lastName: 'Juklevski', firstName: 'Oleg', group: 9 },
    { lastName: 'Schwarz', firstName: 'Daniela', group: 9 },
    { lastName: 'Ribeiro', firstName: 'Guilherme', group: 9 },
    { lastName: 'Lehrmann', firstName: 'Martin', group: 9 },
    { lastName: 'Scheffels', firstName: 'Ralf', group: 9 },

    { lastName: 'Liebig', firstName: 'Lutz', group: 10 },
    { lastName: 'Markwald', firstName: 'Paul', group: 10 },
    { lastName: 'Wiese', firstName: 'Jessica', group: 10 },
    { lastName: 'Schwesinger', firstName: 'Uwe', group: 10 },
    { lastName: 'Greb', firstName: 'Thomas', group: 10 },
    { lastName: 'Brendel', firstName: 'Thomas', group: 10 },
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

}
