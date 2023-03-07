import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import styled from "styled-components";
import { COLORS } from "../shared";
import { assertNoDuplicateChildrenField } from "../utils/duplicateField";

const StyledTreeItem = styled(TreeItem)`
  .MuiTreeItem-content {
    box-sizing: border-box;
    height: 50px;
    color: rgba(0, 0, 0, 0.5);
    background-color: #77cbb9;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
    width: 100%;
    margin-bottom: 10px;

    &.Mui-selected,
    &.Mui-selected:hover,
    &.Mui-selected.Mui-focused,
    &:hover {
      color: ${"rgba(255,255,255, 0.8)"};
      background-color: ${COLORS.DARK};
    }
    &.Mui-focused {
      color: rgba(0, 0, 0, 0.5);
      background-color: #77cbb9;
    }
  }
`;

export default function SlideTreeView({ data, active: [active, setactive] }) {
  assertNoDuplicateChildrenField(data, "id");

  const renderTree = (node) => (
    <StyledTreeItem
      key={node.id}
      nodeId={node.id}
      label={node.title}
      onClick={(event) => setactive(node)}
    >
      {Array.isArray(node.children)
        ? node.children.map((node) => renderTree(node))
        : null}
    </StyledTreeItem>
  );

  return (
    <TreeView
      aria-label="menu"
      sx={{
        maxHeight: "100%",
        overflow: "auto",
      }}
    >
      {data.map(renderTree)}
    </TreeView>
  );
}
