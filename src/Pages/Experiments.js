import React from "react";
import { Link } from "react-router-dom";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { readableDate } from "../components/helpers";

import ExperimentsHeader from "../components/ExperimentsHeader";
import { useProjects } from "../custom-hooks/";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Experiments() {
  const [projects, isLoading] = useProjects();
  const renderProjects = () => {
    if (isLoading) return <p>Loading...</p>;
    return projects.map((project) => (
      <div className="project">
        <h3>{project.fields.title}</h3>
        <img src={project.fields.featureImage.fields.file.url} alt={project.fields.featureImage.title}></img>
        <small>{readableDate(project.fields.date)}</small>
        <div className="projectDescription">{project.fields.description}</div>
        {/* <div>{documentToReactComponents(project.fields.body)}</div> */}

      </div>
    ));
  };
  return (
    <>
      <ExperimentsHeader />
      <div className="ecstasy">
        <p>an aminated dream...</p>
        <p></p>
        <iframe
          className="ecstasy"
          src="https://player.vimeo.com/video/435519745"
          width="640"
          height="480"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
      <div className="projects">
      {renderProjects()}

      </div>
    </>
  );
}
