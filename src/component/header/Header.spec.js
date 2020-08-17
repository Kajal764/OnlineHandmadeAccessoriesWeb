import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { Typography } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ProfileIcon from './ProfileIcon';
import CartIcon from './CartIcon';

describe("Basic rendering", () => {

    it("Should render header element", () => {
        const headerComponent = shallow(<Header />);
        const typographyComponent = headerComponent.find(Typography);
        const searchComponent = headerComponent.find(SearchIcon);
        const profileComponent = headerComponent.find(ProfileIcon);
        const cartComponent = headerComponent.find(CartIcon);

        expect(typographyComponent.length).toBe(1);
        expect(searchComponent.length).toBe(1);
        expect(profileComponent.length).toBe(2);
        expect(cartComponent.length).toBe(2);
        expect(typographyComponent.text()).toBe("Priya Creations")
    })
})