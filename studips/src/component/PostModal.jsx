import React from 'React'

function PostModal() {
    return
        (
            <div className="overlay">
                <div className="newPostCard">
                    <div>
                        <label for="choiceEvent">
                            <input type="radio" id="choiceEvent" value="event"/>
                            Evènements
                        </label>
                        <label for="choiceAccomodation">
                            Logements
                            <input type="radio" id="choiceAccomodation" value="event"/>
                        </label>
                        <label for="choiceClass">
                            Cours
                            <input type="radio" id="choiceClass" value="event"/>
                        </label>
                        <label for="choiceJob">
                            Stage / Jobs
                            <input type="radio" id="choiceJob" value="event"/>
                        </label>
                        <label for="choicesupply">
                            Fournitures
                            <input type="radio" id="choicesupply" value="event"/>
                        </label>
                    </div>
                </div>
            </div>
        )
}

export default PostModal;