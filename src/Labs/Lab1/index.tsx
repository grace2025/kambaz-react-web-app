export default function Lab1() {
    return (
        <div id="wd-lab1">
            <h3>Grace Bhagat</h3>
            <h2>Lab 1</h2>
            <h3>HTML Examples</h3>
            <div id="wd-h-tag">
                <h4>Heading Tags</h4>
                Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
            </div>
            <div id="wd-p-tag">
                <h4>Paragraph Tag</h4>
                <p id="wd-p-1">
                    This is a paragraph. We often separate a long set of sentences with vertical spaces to make the text easier to read. Browsers ignore vertical white spaces and render all the text as one single set of sentences. To force the browser to add vertical spacing, wrap the paragraphs you want to separate with the paragraph tag
                </p>
                <p id="wd-p-2">
                    This is the first paragraph. The paragraph tag is used to format vertical gaps between long pieces of text like this one.
                </p>
                <p id="wd-p-3">
                    This is the second paragraph. Even though there is a deliberate white gap between the paragraph above and this paragraph, by default browsers render them as one contiguous piece of text as shown here on the right.
                </p>
                <p id="wd-p-4">
                    This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.
                </p>
            </div>
            <div id="wd-lists">
                <h4>List Tags</h4>
                <h5>Ordered List Tag</h5>
                How to make pancakes:
                <ol id="wd-pancakes">
                    <li>Mix dry ingredients.</li>
                    <li>Add wet ingredients.</li>
                    <li>Stir to combine.</li>
                    <li>Heat a skillet or griddle.</li>
                    <li>Pour batter onto the skillet.</li>
                    <li>Cook until bubbly on top.</li>
                    <li>Flip and cook the other side.</li>
                    <li>Serve and enjoy!</li>
                </ol>
                How to make chocolate chip cookies:
                <ol id="wd-your-favorite-recipe">
                    <li>Mix butter and sugar ingredients.</li>
                    <li>Add Vanilla and eggs.</li>
                    <li>Add dry ingredients.</li>
                    <li>Stir to combine.</li>
                    <li>Add chocolate chips.</li>
                    <li>Scoop dough and put in over.</li>
                    <li>Back for 8 minutes.</li>
                    <li>Serve and enjoy!</li>
                </ol>
                <h5>Unordered List Tag</h5>
                My favorite books (in no particular order)
                <ul id="wd-my-books">
                    <li>Dune</li>
                    <li>Lord of the Rings</li>
                    <li>Ender's Game</li>
                    <li>Red Mars</li>
                    <li>The Forever War</li>
                </ul>
                Your favorite books (in no particular order)
                <ul id="wd-your-books">
                    <li>Maze Runner</li>
                    <li>Percy Jackson</li>
                    <li>Harry Potter</li>
                </ul>

            </div>
            <div id="wd-tables">
                <h4>Table Tag</h4>
                <table border={1} width="30%">
                    <thead>
                        <tr>
                            <th>Quiz</th>
                            <th>Topic</th>
                            <th>Date</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Q1</td>
                            <td>HTML</td>
                            <td>1/3/25</td>
                            <td>85</td>
                        </tr>
                        <tr>
                            <td>Q2</td>
                            <td>CSS</td>
                            <td>1/10/25</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q3</td>
                            <td>Java</td>
                            <td>2/12/25</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Q4</td>
                            <td>JavaScript</td>
                            <td>3/2/25</td>
                            <td>98</td>
                        </tr>
                        <tr>
                            <td>Q5</td>
                            <td>React</td>
                            <td>3/17/25</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q6</td>
                            <td>Bootstrap</td>
                            <td>4/2/25</td>
                            <td>96</td>
                        </tr>
                        <tr>
                            <td>Q7</td>
                            <td>Routing</td>
                            <td>4/12/25</td>
                            <td>93</td>
                        </tr>
                        <tr>
                            <td>Q8</td>
                            <td>Node</td>
                            <td>4/29/25</td>
                            <td>91</td>
                        </tr>
                        <tr>
                            <td>Q9</td>
                            <td>Session</td>
                            <td>5/2/25</td>
                            <td>99</td>
                        </tr>
                        <tr>
                            <td>Q8</td>
                            <td>MongoDB</td>
                            <td>5/22/25</td>
                            <td>89</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>Average</td>
                            <td>93</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div id="wd-images">
                <h4>Image tag</h4>
                Loading an image from the internet: <br />
                <img id="wd-starship" width="400px"
                    src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg" />
                <br />
                Loading a local image:
                <br />
                <img id="wd-teslabot" src="public/images/teslabot.jpg" height="200px" />
            </div>
            <div id="wd-forms">
                <h4>Form Elements</h4>
                <form id="wd-text-fields">
                    <h5>Text Fields</h5>
                    <label htmlFor="wd-text-fields-username">Username:</label>
                    <input placeholder="grace" id="wd-text-fields-username" /> <br />
                    <label htmlFor="wd-text-fields-password">Password:</label>
                    <input type="password" value="123@#$asd" id="wd-text-fields-password" />
                    <br />
                    <label htmlFor="wd-text-fields-first-name">First name:</label>
                    <input type="text" title="John" id="wd-text-fields-first-name" /> <br />
                    <label htmlFor="wd-text-fields-last-name">Last name:</label>
                    <input type="text" placeholder="Doe"
                        value="Wonderland"
                        title="The last name"
                        id="wd-text-fields-last-name" />
                    <br />
                    <h5>Text boxes</h5>
                    <label>Biography:</label><br />
                    <textarea id="wd-textarea" cols={30} rows={10}>Hi, my name is grace, how are you doing?</textarea>
                </form>
            </div>

            <h5 id="wd-buttons">Button</h5>
            <button type="button"
                onClick={() => alert("Life is Good!")}
                id="wd-all-good">
                Hello World!
            </button>

            <h5 id="wd-checkboxes">Checkboxes</h5>
            <label>Favorite movie genre:</label><br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
            <label htmlFor="wd-chkbox-comedy">Comedy</label><br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
            <label htmlFor="wd-chkbox-drama">Drama</label><br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
            <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
            <label htmlFor="wd-chkbox-fantasy">Fantasy</label>

            <h4 id="wd-dropdowns">Dropdowns</h4>

            <h5>Select one</h5>
            <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br />
            <select id="wd-select-one-genre">
                <option value="COMEDY">Comedy</option>
                <option value="DRAMA">Drama</option>
                <option selected value="SCIFI">
                    Science Fiction</option>
                <option value="FANTASY">Fantasy</option>
            </select>

            <h5>Select many</h5>
            <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br />
            <select multiple id="wd-select-many-genre">
                <option value="COMEDY" selected> Comedy          </option>
                <option value="DRAMA">           Drama           </option>
                <option value="SCIFI" selected> Science Fiction </option>
                <option value="FANTASY">         Fantasy         </option>
            </select>

            <h4>Other HTML field types</h4>

            <label htmlFor="wd-text-fields-email"> Email: </label>
            <input type="email"
                placeholder="bhagat.gr@northeastern.edu"
                id="wd-text-fields-email" /><br />

            <label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
            <input type="number"
                value="500000"
                placeholder="1000"
                id="wd-text-fields-salary-start" /><br />

            <label htmlFor="wd-text-fields-rating"> Rating: </label>
            <input type="range"
                value="4"
                max="5"
                placeholder=""
                id="wd-text-fields-rating" /><br />

            <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
            <input type="date"
                value="2003-05-01"
                id="wd-text-fields-dob" /><br />

            <h4>Anchor tag</h4>
            Please
            <a href="https://www.lipsum.com" id="wd-lipsum">click here</a>
            to get dummy text<br />




        </div>);
}
