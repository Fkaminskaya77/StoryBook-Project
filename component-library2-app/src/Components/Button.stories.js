import React from 'react';
import Button from './Button';
import { storiesOf } from '@storybook/react';
import "./Button.css";



//main buttons
storiesOf('Button', module)
    .add('Primary', () => <Button
    label="Do something"
    type="primary" />)
    
    .add('Danger', () => <Button
    label="Do Something"
    type="danger" />)
   
    .add('Success', () => <Button
    label="Do Something"
    type="success" />)
    
    .add('Warning', () => <Button
    label="Do Something"
    type="warning" />)
    
    .add('Default', () => <Button
    label="Do Something"
    type="default" />)


//Hover Buttons

    .add("Primary Hover", () => <Button 
     label="Do Something"
     type="primary" hover />)

    .add("Danger Hover", () => <Button 
     label="Do Something"
     type="danger" hover />)
   
    .add("Success Hover", () => <Button
      label="Do Something" 
      type="success" hover />)

    .add("Warning Hover", () => <Button 
      label="Do Something" 
      type="warning" hover />)

    .add("Default Hover", () => <Button 
       label="Do Something" hover />)

   
   //Outline Buttons
   
    .add("Primary Outline", () => (<Button 
        label="Do Something"
        type="primary" outline />))

    .add("Danger Outline", () => <Button 
    label="Do Something"
    type="danger" outline />)

    .add("Success Outline", () => (<Button 
        label="Do Something"
        type="success" outline />))
       
    .add("Warning Outline", () => (<Button
         label="Do Something"
         type="warning" outline />))

    .add("Default Outline", () => <Button
          label="Do Something" outline />)

     //Pale Buttons

     .add("Primary Pale", () => <Button 
     label="Do Something" 
     type="primary" pale />)

     .add("Danger Pale", () => <Button 
     label="Do Something"
     type="danger" pale />)

     .add("Success Pale", () => <Button 
     label="Do Something" 
     type="success" pale />)

     .add("Warning Pale", () => <Button 
     label="Do Something" 
     type="warning" pale />)
    
     .add("Default Pale", () => <Button 
     label="Do Something" pale />)

     //Large Buttons

     .add("Large Primary", () => (<Button 
        label="Do Something"
        type="primary" large />))

     .add("Large Danger", () => (<Button 
        label="Do Something"
        type="danger" large />))

     .add("Large Success", () => (<Button 
        label="Do Something"
        type="success" large />))

      .add("Large Warning", () => (<Button
         label="Do Something"
         type="warning" large />))
         
      .add("Large Default", () => <Button 
      label="Default" large white />)

      //Large Outline Buttons

      .add("Large Primary Outline", () => (<Button
         label="Do Something"
         type="primary" large outline />))

      .add("Large Danger Outline", () => (<Button 
        label="Do Something"
        type="danger" large outline />))

        .add("Large Success Outline", () => (<Button 
            label="Do Something"
            type="success" large outline />))

        .add("Large Warning Outline", () => (<Button 
            label="Do Something"
            type="warning" large outline />))

         .add("Large Default Outline", () => <Button 
         label="Do Something" large outline />)

         //Large Pale Buttons

            .add("Large Primary Pale", () => (<Button 
                label="Do Something"
                type="primary" large pale />))

            .add("Large Danger Pale", () => (<Button 
                label="Do Something"
                type="danger" large pale />))

            .add("Large Success Pale", () => (<Button 
                label="Do Something"
                type="success" large pale />))

             .add("Large Warning Pale", () => (<Button
                 label="Do Something"
                 type="warning" large pale />))
                
                 .add("Large Default Pale", () => <Button 
                 label="Do Something" large pale />)