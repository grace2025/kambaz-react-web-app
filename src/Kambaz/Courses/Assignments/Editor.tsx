export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
      </textarea>
      <br /><br></br>
      <table>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br></br>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-points">Assignment Group</label>
          </td>
          <td>
            <select id="wd-select-one-genre">
              <option value="Publish All">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <br></br>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-points">Display Grade as</label>
          </td>
          <td>
            <select id="wd-select-one-genre">
              <option value="Publish All">Percentage</option>
            </select>
          </td>
        </tr>
        <br></br>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-points">Submission Type</label>
          </td>
          <td>
            <select id="wd-select-one-genre">
              <option value="Publish All">Online</option>
            </select>
          </td>
        </tr>
        <br></br>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Οnline Entry Options</label>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <ul>
              <li>Text Entry</li>
              <li>Website URL</li>
              <li>Media Recordings</li>
              <li>Student Annotation</li>
              <li>File Uploads</li>
            </ul>
          </td>
        </tr>
        <br></br>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-points">Assign to</label>
          </td>
          <td>
            <input id="wd-points" value="Everyone" />
          </td>
        </tr>
        <br></br>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-points">Due</label>
          </td>
          <td>
            <input id="wd-points" value="05/12/2025" />
          </td>
        </tr>
        <br></br>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-points">Available from</label>
          </td>
        </tr>
        <tr>
          <td>
            <input id="wd-points" value="05/4/2025" />
          </td>
        </tr>
        <br></br>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-points">Until</label>
          </td>
        </tr>
        <tr>
          <td>
            <input id="wd-points" value="05/12/2025" />
          </td>
        </tr>
        <tr>
          <td>
            <input id="wd-points" value="05/12/2025" />
          </td>
        </tr>
        <br></br>
        <tr>
          <td align="right" valign="bottom">
            <button>Cancel</button>
            <button>Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
