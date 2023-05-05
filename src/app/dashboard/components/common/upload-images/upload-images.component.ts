import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss']
})
export class UploadImagesComponent {
  previewImageUrls: {imageUrl: string}[] = [];
constructor(private httpclient:HttpClient){

}
// Declare previewImageUrls as an array of objects


onFileSelected(event: any) {
  const fileList: FileList = event.target.files;
  for (let i = 0; i < fileList.length; i++) {
    const file: File = fileList[i];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Do something with the file content, such as displaying an image preview
        const imageUrl = reader.result as string;
        this.previewImageUrls.push({imageUrl:imageUrl}); // Assign object with imageUrl property
        sessionStorage.setItem('previewImageUrls:',JSON.stringify(this.previewImageUrls));
        console.log(`previewImageUrl:`, this.previewImageUrls);
      };
    }
  }
}


}
