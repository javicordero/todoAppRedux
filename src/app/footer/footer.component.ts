import { Component, OnInit } from '@angular/core'
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faLinkedin = faLinkedin
  faGithubSquare = faGithubSquare

  constructor() {}

  ngOnInit(): void {}
}
