import React from "react";
import { FeatureList, featureList } from "../../constants";
import "./index.css";

type Props = {
  develop_low?: Array<FeatureList>;
  develop_medium?: Array<FeatureList>;
  develop_hight?: Array<FeatureList>;
  develop_experience?: React.ReactElement;
  summary?: React.ReactElement;
  develop_hight_cost?: string[];
};

export function DevelopExperienceComponent({
  develop_low,
  develop_medium,
  develop_hight,
  develop_experience,
  summary,
  develop_hight_cost = [],
}: Props) {
  return (
    <div className="content">
      <div className="box">
        <h3>通过配置可支持的功能</h3>
        {develop_low?.map((item, index) => (
          <div>
            {index + 1}.{featureList[item]}
          </div>
        ))}
      </div>
      <div className="box">
        <h3>提供了API可实现的功能</h3>
        {develop_medium?.map((item, index) => (
          <div>
            {index + 1}.{featureList[item]}
          </div>
        ))}
      </div>
      <div className="box">
        <h3>需要开发的功能</h3>
        {develop_hight?.map((item, index) => (
          <div>
            {index + 1}.{featureList[item]}
            {develop_hight_cost[index] ? (
              <span className={develop_hight_cost[index]}>
                {develop_hight_cost[index]}
              </span>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      <div className="box">{develop_experience}</div>
      {summary && (
        <div className="box">
          <h3>总结</h3>
          {summary}
        </div>
      )}
    </div>
  );
}
