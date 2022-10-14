import React from "react";
import "./Photos.css";
import { MagnifyingGlass } from "react-loader-spinner";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-3" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={photo.src.landscape} className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return (
      <div className="loader text-center">
        <MagnifyingGlass
          height={80}
          width={80}
          color="black"
          glassColor="lightgray"
        />
      </div>
    );
  }
}

