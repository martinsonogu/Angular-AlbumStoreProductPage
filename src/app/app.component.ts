import { Component } from "@angular/core";
import { ProductService } from "./product.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css", "ProductService"],
})
export class AppComponent {
  title = "app works!";
}
