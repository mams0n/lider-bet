import React from "react";
import { Checkbox, Menu, Drawer } from "antd";
import CIcon from "components/Icon/Icon";
import { data } from "../../../../database/data";
import * as S from "./styled";
import { useBetmarketContext } from "pages/betmarket/betmarket.provider";
import { CheckboxChangeEvent } from "antd/lib/checkbox";

const offers = data[0];
const { tags, menuTags } = offers;

const SideMenu = () => {
  const { filterBySideTags, setFilterBySideTags, menuIsOpen, setMenuIsOpen } = useBetmarketContext();

  const onChange = (e: CheckboxChangeEvent, value: number) => {
    setFilterBySideTags((v) =>
      e.target.checked ? [...v, value] : v.filter((n) => n !== value)
    );
  };

  const slotsArray = menuTags[0].children.map((tag) => ({
    id: tag,
    name: tags[tag]?.name,
  }));
  const spinsArray = menuTags[2].children.map((tag) => ({
    id: tag,
    name: tags[tag]?.name,
  }));

  const [slotsExpanded, setSlotsExpanded] = React.useState(false)
  const [spinsExpanded, setSpinsExpanded] = React.useState(false)

  const menuWrapper = () => {
    return <Menu
      onOpenChange={(e) =>
        setFilterBySideTags(
          [
            ...(e.includes("slots") ? slotsArray : []),
            ...(e.includes("spins") ? spinsArray : []),
          ].map((i) => i.id)
        )
      }
      mode={"inline"}
    >
      <Menu.Item
        key={"all"}
        title={'ყველა'}
        className={!spinsExpanded && !slotsExpanded ? 'activeClass' : 'menuItem'}
        icon={<CIcon filename="leaderBet" />}
      >
        ყველა
      </Menu.Item>
      <Menu.SubMenu
        key={"slots"}
        icon={<CIcon filename="slots" />}
        title={"სლოტები"}
        onTitleClick={() => setSlotsExpanded(!slotsExpanded)}
      >
        {slotsArray.map((item) => {
          return (
            <Menu.Item
              style={{ background: "white", margin: 0, height: "25px" }}
            >
              <Checkbox
                checked={filterBySideTags.includes(item.id)}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => {
                  onChange(e, item.id);
                }}
                style={{
                  color: "#414141",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </Checkbox>
            </Menu.Item>
          );
        })}
      </Menu.SubMenu>
      <Menu.SubMenu
        key={"spins"}
        icon={<CIcon filename="spins" />}
        title={"სპინ თამაშები"}
        onTitleClick={() => setSpinsExpanded(!spinsExpanded)}
      >
        {spinsArray.map((item) => {
          return (
            <Menu.Item
              style={{ background: "white", margin: 0, height: "25px" }}
            >
              <Checkbox
                checked={filterBySideTags.includes(item.id)}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => {
                  onChange(e, item.id);
                }}
                style={{
                  color: "#414141",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </Checkbox>
            </Menu.Item>
          );
        })}
      </Menu.SubMenu>
    </Menu>
  }

  return (
    <S.Container>
      <Drawer visible={menuIsOpen} onClose={(() => setMenuIsOpen(false))} placement="left">
        {menuWrapper()}
      </Drawer>
      {menuWrapper()}
    </S.Container>
  );
};

export default SideMenu;
