import { Component } from '@angular/core';

@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrls: ['./day-two.component.scss']
})
export class DayTwoComponent {

  personsReichstag: { lastName: string, firstName: string }[] = [

    { lastName: 'Ari', firstName: 'Ahmettug' },
    { lastName: 'Backes', firstName: 'Uwe' },
    { lastName: 'Morales', firstName: 'Bianca' },
    { lastName: 'Böhmer', firstName: 'Oliver' },
    { lastName: 'Bongartz', firstName: 'Fabian' },
    { lastName: 'Brendel', firstName: 'Thomas' },
    { lastName: 'Breun', firstName: 'Gregor' },
    { lastName: 'Dannenberg', firstName: 'Matthias' },
    { lastName: 'Dereobali', firstName: 'Hasan Yigit' },
    { lastName: 'Petrich', firstName: 'Robin' },
    { lastName: 'Domany', firstName: 'Jan' },
    { lastName: 'Domnik', firstName: 'Ralf' },
    { lastName: 'Droste', firstName: 'Niels' },
    { lastName: 'Eberhardt', firstName: 'Alexander' },
    { lastName: 'Nowack', firstName: 'Stefan' },
    { lastName: 'Falch', firstName: 'Stephan' },
    { lastName: 'Frahm', firstName: 'Jörg' },
    { lastName: 'Schrumpf', firstName: 'Matthias' },
    { lastName: 'Frömel', firstName: 'Hans' },
    { lastName: 'Gartmann', firstName: 'Dirk' },
    { lastName: 'Göwe', firstName: 'Steffen' },
    { lastName: 'Greb', firstName: 'Thomas' },
    { lastName: 'Grün', firstName: 'Christian' },
    { lastName: 'Hamm', firstName: 'Moritz' },
    { lastName: 'Harms', firstName: 'Jörg' },
    { lastName: 'Heine-Puppe', firstName: 'Annett' },
    { lastName: 'Hillebrand', firstName: 'Lukas' },
    { lastName: 'Homey', firstName: 'Tobias' },
    { lastName: 'Jede', firstName: 'Katrin' },
    { lastName: 'Juklevski', firstName: 'Oleg' },
    { lastName: 'Kämper', firstName: 'Sebastian' },
    { lastName: 'Köhler', firstName: 'Sabine' },
    { lastName: 'Kunath', firstName: 'Niels' },
    { lastName: 'Kuhn', firstName: 'Volker' },
    { lastName: 'Lehrmann', firstName: 'Martin' },
    { lastName: 'Liebig', firstName: 'Lutz' },
    { lastName: 'Markwald', firstName: 'Hans Paul' },
    { lastName: 'Meck', firstName: 'Lena' },
    { lastName: 'Peschke', firstName: 'Lydia' },
    { lastName: 'Peters', firstName: 'Andreas' },
    { lastName: 'Petrov', firstName: 'Alexsandar' },
    { lastName: 'Ribeiro', firstName: 'Guilherme' },
    { lastName: 'Rosenau', firstName: 'Yvonne' },
    { lastName: 'Sabbane', firstName: 'Faycal' },
    { lastName: 'Scheffels', firstName: 'Ralf' },
    { lastName: 'Schumacher', firstName: 'Andreas' },
    { lastName: 'Schwartz', firstName: 'Philipp' },
    { lastName: 'Schwarz', firstName: 'Catharina' },
    { lastName: 'Schwarz', firstName: 'Daniela' },
    { lastName: 'Schwesinger', firstName: 'Uwe' },
    { lastName: 'Theißen', firstName: 'Volker' },
    { lastName: 'Thompson', firstName: 'Alexandra' },
    { lastName: 'Voß', firstName: 'Hendrik Sebastian' },
    { lastName: 'Wedekind', firstName: 'Frank' },
    { lastName: 'Wega', firstName: 'Björn' },
    { lastName: 'Weigand', firstName: 'Christine' },
    { lastName: 'Weise', firstName: 'Eric' },
    { lastName: 'Wiese', firstName: 'Jessica' },
    { lastName: 'Zumbach', firstName: 'Volker' },
    { lastName: 'Brückner', firstName: 'Alexandra' }
  ].sort((p1, p2) => p1.lastName.localeCompare(p2.lastName))

  personsWorldCafe: { lastName: string, firstName: string, group: number }[] = [
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
