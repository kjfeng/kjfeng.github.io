import React from 'react';
import '../main.css';
import { Row } from 'react-bootstrap';
import Details from './Details';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { HashLink } from 'react-router-hash-link';

export function PageHeader() {
  return (
    <div className="header-wrapper">
      <span className="page-header"><a href="/">Kevin Feng</a></span>
      <span><a className="header-link" href={ require("./files/cv.pdf").default }>CV</a></span>
      <span><HashLink className="header-link" to={'/projects#nav'}>Projects</HashLink></span>
    </div>
  );
}

export function VimeoEmbed(props) {
  return (
    <div style={{paddingBottom: "1rem"}}>
      <div style={{padding: "56.25% 0 0 0", position:"relative"}}><iframe title="Vimeo embed" src={props.vimeoLink} style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
}

// deprecated to 2020 projects and older
export function DetailsPage(props) {
  return (
    <div className="page-template col-sm-12 col-md-10 col-lg-8">
      <PageHeader />
      {props.children}
    </div>
  );
}

export function Figure(props) {
  let altString = "";
  let width = "100%";
  if (props.alt) { altString = props.alt; }
  if (props.width) { width = props.width; }
  return (
    <figure style={{textAlign: "center"}}>
      <img style={{width: width, margin: "0rem 0 1rem 0"}} src={ require(`${props.path}`).default } alt={altString}></img>
      {props.caption ? <figcaption>{props.caption}</figcaption> : null}
    </figure>
  );
}

export function Project(props) {
  return (
    <div>
      {props.urlext ? <Link className="link-router" to={`/projects/${props.urlext}`}>{props.name}</Link> : null}

      {props.weblink ? <a className="link-router" href={props.weblink}>{props.name}</a> : null}

      <span style={{color: "#333"}}> · {props.year}</span>

    </div>

  );
}

export function Pub(props) {
  function authorFormatter(authorArr) {
    let formatted = [];
    for (let i = 0; i < authorArr.length - 1; i++) {
      formatted.push(authorArr[i][0], ", ");
    }
    formatted.push(authorArr[authorArr.length - 1][0]);
    return formatted;
  }

  return (
    <div style={{marginBottom: ".75rem"}}>
      <strong>{props.title}</strong><br/>
      <span>{authorFormatter(props.authors)}</span><br/>
      <i>{props.venue}</i>
      <Details {...props}/>
    </div>
  );
}

export function AuthorPile(props) {

  return (
    <Row className="authorpile" sm={1} md={2}>
      {props.authors.map((author, index) =>
        <div className="author-block">
          <div className="circle-pic" style={{backgroundImage: `url(${author[1].default})`}}></div>
          <h6 className="author-name">{author[0]}</h6>
        </div>
      )}

    </Row>
  );
}

export function autoScroll() {
  if (sessionStorage.getItem("onDetailsPage") === "0") {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'});
    sessionStorage.setItem("onDetailsPage", 1);
  }
}

export function InfoPage(props) {
  autoScroll();
  return (
    <div>
      <div className="page-template col-sm-12 col-md-10 col-lg-8">
        <Helmet title={`${props.helmetExt} | Kevin Feng`} />
        <PageHeader />
        {props.children}
      </div>
    </div>

  );
}
