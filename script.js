(function () {
  var S = SITE;
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };
  var list = function (a, cls) {
    return '<ul class="' + cls + '">' + (a || []).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>";
  };
  var sec = function (id, title, body, extra) {
    return '<section class="sec ' + (extra || "") + '" id="' + id + '"><h2>' + esc(title) + '</h2><div class="body">' + body + "</div></section>";
  };
  var ext = function (href, label) {
    return '<a class="link" href="' + esc(href) + '" target="_blank" rel="noopener">' + label + "</a>";
  };

  /* Hero */
  var hero =
    '<section class="hero"><div class="hero-text">' +
    (S.openTo ? '<p class="status"><span class="dot" aria-hidden="true"></span>' + esc(S.openTo) + "</p>" : "") +
    "<h1>" + esc(S.name) + "</h1>" +
    '<p class="role">' + esc(S.role) + '</p><p class="intro">' + esc(S.intro) + "</p>" +
    '<div class="actions"><a class="btn primary" href="' + esc(S.resume) + '" download>Download résumé</a>' +
    '<a class="btn" href="#projects">See projects</a></div></div>' +
    '<figure class="portrait-wrap"><img class="portrait" src="' + esc(S.photo) + '" alt="Portrait of ' + esc(S.name) + '" width="480" height="480"></figure></section>';

  /* About + education */
  var e = S.education;
  var about = S.about.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
    '<div class="edu"><div><h3>' + esc(e.degree) + '</h3><p class="sub">' + esc(e.school) + "</p>" +
    '<p class="meta">' + esc(e.years) + (e.status ? ", " + esc(e.status) : "") + "</p></div>" +
    '<div class="cgpa"><strong>' + esc(e.cgpa) + "</strong><span>" + esc(e.cgpaNote) + "</span></div></div>";

  /* Projects */
  var projCard = function (p) {
    var links = (p.live ? ext(p.live, "Visit live site") : "") + (p.code ? ext(p.code, "View code on GitHub") : "");
    return '<article class="proj' + (p.featured ? " featured" : "") + '">' +
      (p.tag ? '<p class="tag">' + esc(p.tag) + "</p>" : "") +
      "<h3>" + esc(p.name) + "</h3>" +
      '<p class="desc">' + esc(p.text) + "</p>" +
      (p.features && p.features.length ? '<div class="features"><h4>Key features</h4>' + list(p.features, "feat") + "</div>" : "") +
      list(p.tech, "chips") +
      (links ? '<div class="links">' + links + "</div>" : "") +
      "</article>";
  };
  var proj = '<div class="proj-grid">' + S.projects.map(projCard).join("") + "</div>";

  /* Achievements, grouped by kind */
  var kinds = [];
  S.achievements.forEach(function (a) { var k = a.kind || "Awards"; if (kinds.indexOf(k) < 0) kinds.push(k); });
  var ach = '<div class="awards">' + kinds.map(function (k) {
    return '<div class="award-group"><h3 class="group-title">' + esc(k) + "</h3><ul>" +
      S.achievements.filter(function (a) { return (a.kind || "Awards") === k; }).map(function (a) {
        return '<li><strong>' + esc(a.title) + "</strong><span>" + esc(a.detail) + "</span></li>";
      }).join("") + "</ul></div>";
  }).join("") + "</div>";

  /* Experience */
  var exp = S.experience.map(function (x) {
    return '<div class="row"><div class="row-head"><div><h3>' + esc(x.role) + '</h3><p class="sub">' + esc(x.org) + "</p></div>" +
      (x.when ? '<span class="when">' + esc(x.when) + "</span>" : "") + "</div>" + list(x.points, "pts") + "</div>";
  }).join("");

  /* Skills */
  var skills = S.skills.map(function (s) {
    return '<div class="skill-row"><h3>' + esc(s.group) + "</h3>" + list(s.items, "chips") + "</div>";
  }).join("");

  /* Contact */
  var c = S.contact;
  var links = [
    ["Email", c.email, c.email ? "mailto:" + c.email : ""],
    ["Phone", c.phone, c.phone ? "tel:" + c.phone : ""],
    ["LinkedIn", (c.linkedin || "").replace(/^https?:\/\/(www\.)?/, ""), c.linkedin],
    ["GitHub", (c.github || "").replace(/^https?:\/\/(www\.)?/, ""), c.github]
  ].filter(function (l) { return l[1]; }).map(function (l) {
    return "<li><span>" + l[0] + '</span><a href="' + esc(l[2]) + '"' + (l[2].indexOf("http") === 0 ? ' target="_blank" rel="noopener"' : "") + ">" + esc(l[1]) + "</a></li>";
  }).join("") + (c.location ? "<li><span>Location</span><p>" + esc(c.location) + "</p></li>" : "");
  var contact = '<p class="lead">' + esc(c.text) + '</p><a class="btn light" href="mailto:' + esc(c.email) + '">Send me an email</a><ul class="contact">' + links + "</ul>";

  document.getElementById("top").innerHTML =
    hero + sec("about", "About", about) + sec("projects", "Projects", proj) +
    sec("achievements", "Awards", ach) + sec("experience", "Experience", exp) +
    sec("skills", "Skills", skills) + sec("contact", "Get in touch", contact, "dark");
  document.getElementById("brand").textContent = S.initials;
  document.title = S.name + " | Portfolio";
  document.getElementById("footer").innerHTML = "<span>© " + new Date().getFullYear() + " " + esc(S.name) + '</span><a href="#top">Back to top</a>';
})();
